package com.example.experiment6.controllers;

import com.example.experiment6.models.User;
import com.example.experiment6.security.JwtUtil;

import org.springframework.web.bind.annotation.*;

@RestController
public class AuthController {

    JwtUtil jwtUtil = new JwtUtil();

    @PostMapping("/login")
    public String login(@RequestBody User user) {

        if(user.getUsername().equals("user123") &&
           user.getPassword().equals("password123")) {

            return jwtUtil.generateToken(user.getUsername());
        }

        return "Invalid Credentials";
    }

    @GetMapping("/protected")
    public String protectedRoute(@RequestHeader("Authorization") String token) {

        token = token.replace("Bearer ","");

        String username = jwtUtil.validateToken(token);

        return "Hello " + username + " you accessed protected route";
    }
}