package com.example.web_dev.Controller;

import com.example.web_dev.Model.Professor;
import com.example.web_dev.Service.ProfessorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Criado por Mariana
 * Data: 21/03/2019
 **/
@CrossOrigin(origins  = "http://localhost:4200")
@RestController
@RequestMapping(path = "/professores")
public class ProfessorController {

    @Autowired
    private ProfessorService service;

    @PostMapping(path = "/inserir")
    public ResponseEntity inserir(@RequestBody Professor prof){
        return service.salvar(prof);
    }

    @GetMapping(path = "/listar")
    public List<Professor> listar(){
        return service.listar();
    }

    @GetMapping(path = "/buscarProf")
    public Professor buscarProf(@PathVariable String nome){
        return service.buscarProf(nome);
    }
}
