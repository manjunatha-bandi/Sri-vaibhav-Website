package com.srivaibhav.backend.config;

import com.srivaibhav.backend.entity.Role;
import com.srivaibhav.backend.entity.User;
import com.srivaibhav.backend.repository.RoleRepository;
import com.srivaibhav.backend.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Component
public class DataInitializer implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(DataInitializer.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Value("${app.admin.username:${ADMIN_USERNAME:}}")
    private String adminUsername;

    @Value("${app.admin.password:${ADMIN_PASSWORD:}}")
    private String adminPassword;

    @Override
    public void run(String... args) throws Exception {
        // Initialize core roles
        if (roleRepository.findByName("ROLE_ADMIN").isEmpty()) {
            roleRepository.save(new Role("ROLE_ADMIN"));
        }
        if (roleRepository.findByName("ROLE_USER").isEmpty()) {
            roleRepository.save(new Role("ROLE_USER"));
        }

        // Production Security: Remove any legacy insecure default admin user created in previous builds
        Optional<User> legacyAdmin = userRepository.findByUsername("admin");
        if (legacyAdmin.isPresent()) {
            // Check if it still matches the default hardcoded password or no custom admin is specified
            if (adminPassword == null || adminPassword.isBlank()) {
                userRepository.delete(legacyAdmin.get());
                logger.warn("⚠️ Removed legacy default 'admin' account from database for production safety.");
            }
        }

        // Provision secure administrator ONLY when explicitly configured via environment variables
        if (adminUsername != null && !adminUsername.isBlank() && adminPassword != null && !adminPassword.isBlank()) {
            Optional<User> existingUser = userRepository.findByUsername(adminUsername);
            User admin = existingUser.orElseGet(User::new);
            admin.setUsername(adminUsername);
            admin.setPassword(passwordEncoder.encode(adminPassword));

            Set<Role> roles = new HashSet<>();
            roleRepository.findByName("ROLE_ADMIN").ifPresent(roles::add);
            admin.setRoles(roles);

            userRepository.save(admin);
            logger.info("🔒 Secure administrator account configured for user: {}", adminUsername);
        } else {
            logger.info("ℹ️ No ADMIN_USERNAME / ADMIN_PASSWORD environment variables supplied. Skipping admin creation.");
        }
    }
}
