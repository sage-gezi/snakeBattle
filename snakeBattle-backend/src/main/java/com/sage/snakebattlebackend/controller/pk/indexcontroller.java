package com.sage.snakebattlebackend.controller.pk;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pk/")
public class indexcontroller {

    @GetMapping
    public String Test(){
        return "hello world";
    }
}
