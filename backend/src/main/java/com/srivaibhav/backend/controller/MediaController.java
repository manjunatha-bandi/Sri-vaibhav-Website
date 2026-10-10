package com.srivaibhav.backend.controller;

import com.srivaibhav.backend.entity.Media;
import com.srivaibhav.backend.repository.MediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/media")
public class MediaController {

    @Autowired(required = false)
    private MediaRepository mediaRepository;

    /*
     * Production Note: Local disk upload is commented out because Render container storage is ephemeral
     * (uploaded files disappear on restart/redeploy).
     * The public Sri Vaibhav website serves all branding and media as static assets directly from frontend/public.
     * To support persistent user uploads in production, integrate cloud object storage (e.g. AWS S3 or Cloudinary).
     *
     * @PostMapping("/upload")
     * public ResponseEntity<?> uploadFile(...) { ... }
     */

    @GetMapping("/category/{category}")
    public ResponseEntity<List<Media>> getMediaByCategory(@PathVariable String category) {
        if (mediaRepository != null) {
            try {
                return ResponseEntity.ok(mediaRepository.findByCategory(category));
            } catch (Exception e) {
                return ResponseEntity.ok(Collections.emptyList());
            }
        }
        return ResponseEntity.ok(Collections.emptyList());
    }
}
