package com.srivaibhav.backend.service;

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

@Service
public class FileStorageService {

    private Path fileStorageLocation;

    public FileStorageService(@Value("${file.upload-dir}") String uploadDir) {
        Path tempPath;
        try {
            tempPath = Paths.get(uploadDir).toAbsolutePath().normalize();
            Files.createDirectories(tempPath);
        } catch (Exception ex) {
            System.err.println("Warning: Configured upload directory '" + uploadDir + "' could not be created: " + ex.getMessage());
            System.err.println("Falling back to local fallback directory: C:/SriVaibhavMedia/");
            try {
                tempPath = Paths.get("C:/SriVaibhavMedia/").toAbsolutePath().normalize();
                Files.createDirectories(tempPath);
            } catch (Exception e) {
                System.err.println("Warning: C:/SriVaibhavMedia/ could not be created, falling back to project root ./media/");
                tempPath = Paths.get("./media/").toAbsolutePath().normalize();
                try {
                    Files.createDirectories(tempPath);
                } catch (Exception e2) {
                    throw new RuntimeException("Could not initialize any file storage location.", e2);
                }
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
