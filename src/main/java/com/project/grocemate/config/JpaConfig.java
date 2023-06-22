package com.project.grocemate.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackages = "com.project.grocemate.repositories")
@EntityScan("com.project.grocemate.models")
public class JpaConfig {
    // configuration code
}
