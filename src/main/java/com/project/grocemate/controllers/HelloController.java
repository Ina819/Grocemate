package com.project.grocemate.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String time(){
        return "Hello! Current server time is " + new Date() + " !";
    }
}
