package com.example.web_dev.Controller;

import com.example.web_dev.Model.Disciplina;
import com.example.web_dev.Service.DisciplinaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins  = "http://localhost:4200")
@RestController
@RequestMapping(path = "/disciplina")
public class DisciplinaController {

    @Autowired
    private DisciplinaService service;

    @PostMapping(path = "/inserir")
    public ResponseEntity inserir(@RequestBody Disciplina disc){
        return service.salvar(disc);
    }

    @GetMapping(path = "/listar")
    public List<Disciplina> listar(){
        return service.listar();
    }

    
}