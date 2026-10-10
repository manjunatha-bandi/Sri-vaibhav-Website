# Sri Vaibhav Matrimony & Events — Official Website

Modern full-stack web application for **Sri Vaibhav Matrimony & Events** (Prop: SURYA, Ananthapuramu).

## Project Structure
- `frontend/`: React 19 + Vite + Ant Design + Framer Motion (Luxury Dark Theme)
- `backend/`: Java 21 + Spring Boot REST API
- `Dockerfile`: Multi-stage production build for Render & cloud deployment
- `docker-compose.yml`: Local containerized deployment
- `render.yaml`: Render Blueprint configuration

---

## Deploying on Render

### Method 1: Web Service (Docker)
1. Go to **[Render Dashboard](https://dashboard.render.com/)** -> Click **New +** -> **Web Service**.
2. Connect your GitHub repository: `https://github.com/manjunatha-bandi/Sri-vaibhav-Website`.
3. Select **Docker** environment (Render automatically detects the root `Dockerfile`).
4. Select the **Free** instance plan.
5. Click **Create Web Service**.

> [!NOTE]
> The Docker container automatically embeds the compiled frontend into Spring Boot and runs on Render's assigned `$PORT`. Zero external database is required by default (it runs using embedded storage out-of-the-box).

---

## Local Development

### Option A: Run Directly with Node & Maven
```bash
# 1. Run Backend (Port 8081)
cd backend
.\mvnw.cmd spring-boot:run

# 2. Run Frontend (Port 5173)
cd frontend
npm run dev
```

### Option B: Run with Docker
```bash
docker compose up --build
```
Access at `http://localhost:8081`.

---

## Contact & Location
- **Proprietor:** Prop: SURYA
- **Cell:** 9347877674, 7330977674
- **Address:** # D.No. 11/218, MEDA Petrol Bunk back side, Sai Nagar Zero Cross, Ananthapuramu.
