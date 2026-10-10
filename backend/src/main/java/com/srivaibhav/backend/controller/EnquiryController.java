package com.srivaibhav.backend.controller;

import com.srivaibhav.backend.entity.Enquiry;
import com.srivaibhav.backend.repository.EnquiryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class EnquiryController {

    @Autowired
    private EnquiryRepository enquiryRepository;

    // Public: anyone can submit a contact enquiry
    @PostMapping("/public/enquiries")
    public ResponseEntity<Enquiry> createEnquiry(@RequestBody Enquiry enquiry) {
        Enquiry saved = enquiryRepository.save(enquiry);
        return ResponseEntity.ok(saved);
    }

    // Admin only: get all enquiries
    @GetMapping("/enquiries")
    public ResponseEntity<List<Enquiry>> getAllEnquiries() {
        return ResponseEntity.ok(enquiryRepository.findAll());
    }

    // Admin only: update enquiry status
    @PutMapping("/enquiries/{id}/status")
    public ResponseEntity<Enquiry> updateStatus(@PathVariable Long id, @RequestParam String status) {
        return enquiryRepository.findById(id).map(enquiry -> {
            enquiry.setStatus(status);
            return ResponseEntity.ok(enquiryRepository.save(enquiry));
        }).orElse(ResponseEntity.notFound().build());
    }
}
