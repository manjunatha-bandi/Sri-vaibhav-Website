# ==========================================
# Stage 1: Build React Frontend (Vite)
# ==========================================
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm ci || npm install

COPY frontend/ ./
RUN npm run build

# ==========================================
# Stage 2: Build Java 21 Spring Boot Backend
# ==========================================
FROM maven:3.9.9-eclipse-temurin-21-alpine AS backend-builder
WORKDIR /app/backend

# Copy pom.xml and cache dependencies
COPY backend/pom.xml ./
RUN mvn dependency:go-offline -B || true

# Copy backend source code
COPY backend/src ./src

# Embed compiled React assets directly into Spring Boot static folder
COPY --from=frontend-builder /app/frontend/dist ./src/main/resources/static/

# Build Spring Boot executable JAR
RUN mvn clean package -DskipTests

# ==========================================
# Stage 3: Lightweight Production JRE Image
# ==========================================
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# Create persistent storage directories
RUN mkdir -p /app/data /app/media

# Copy the built standalone JAR
COPY --from=backend-builder /app/backend/target/*.jar app.jar

# Render assigns dynamic $PORT (defaults to 8081 locally)
ENV PORT=8081
EXPOSE 8081

# Launch application
ENTRYPOINT ["sh", "-c", "java -Djava.security.egd=file:/dev/./urandom -jar app.jar"]
