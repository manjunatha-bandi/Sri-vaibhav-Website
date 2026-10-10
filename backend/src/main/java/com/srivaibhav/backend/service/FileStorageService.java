package com.srivaibhav.backend.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

/**
 * Service for local file storage.
 * In ephemeral production environments (such as Render free tier), containers are stateless.
 * For production persistence, migrate to AWS S3, Cloudinary, or Google Cloud Storage.
 */
@Service
public class FileStorageService {

    private static final Logger logger = LoggerFactory.getLogger(FileStorageService.class);
    private final Path fileStorageLocation;

    public FileStorageService(@Value("${file.upload-dir:./media/}") String uploadDir) {
        Path tempPath;
        try {
            tempPath = Paths.get(uploadDir).toAbsolutePath().normalize();
            Files.createDirectories(tempPath);
        } catch (Exception ex) {
            logger.warn("Configured upload directory '{}' could not be created, using default ./media/: {}", uploadDir, ex.getMessage());
            tempPath = Paths.get("./media/").toAbsolutePath().normalize();
            try {
                Files.createDirectories(tempPath);
            } catch (Exception e2) {
                logger.error("Could not initialize local media directory: {}", e2.getMessage());
            }
        }
        this.fileStorageLocation = tempPath;
    }

    public String storeFile(MultipartFile file, String subDir) {
        String originalFileName = StringUtils.cleanPath(file.getOriginalFilename());
        String fileName = UUID.randomUUID().toString() + "_" + originalFileName;

        try {
            if (fileName.contains("..")) {
                throw new RuntimeException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            Path targetLocation = this.fileStorageLocation.resolve(fileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

            return fileName;
        } catch (IOException ex) {
            throw new RuntimeException("Could not store file " + fileName + ". Please try again!", ex);
        }
    }
}
