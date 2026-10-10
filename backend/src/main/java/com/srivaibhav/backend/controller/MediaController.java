package com.srivaibhav.backend.controller;

import com.srivaibhav.backend.entity.Media;
import com.srivaibhav.backend.repository.MediaRepository;
import com.srivaibhav.backend.service.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/media")
public class MediaController {

    @Autowired
    private FileStorageService fileStorageService;

    @Autowired
    private MediaRepository mediaRepository;

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(
            @RequestParam("file") MultipartFile file,
            @RequestParam("title") String title,
            @RequestParam("category") String category,
            @RequestParam("description") String description) {
            
        String fileName = fileStorageService.storeFile(file, category);

        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/api/media/download/")
                .path(fileName)
                .toUriString();

        Media media = new Media();
        media.setTitle(title);
        media.setCategory(category);
        media.setDescription(description);
        media.setFileName(fileName);
        media.setFilePath(fileDownloadUri);
        media.setFileType(file.getContentType());
        
        mediaRepository.save(media);

        return ResponseEntity.ok(media);
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<Media>> getMediaByCategory(@PathVariable String category) {
        return ResponseEntity.ok(mediaRepository.findByCategory(category));
    }
}
