package com.example.web_dev.Service;

import com.example.web_dev.Model.Professor;
import com.example.web_dev.Repository.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Criado por Mariana
 * Data: 21/03/2019
 **/
@Service
public class ProfessorService {

    @Autowired
    private ProfessorRepository repository;

    public List<Professor> listar(){
        return repository.findAll();
    }

    public ResponseEntity salvar(Professor prof){
        if(prof.getNome() == null || prof.getNome().isEmpty()){
            return ResponseEntity.ok("Nome vazio");
        }
        repository.save(prof);
        return ResponseEntity.ok("Professor inserido com sucesso");
    }

    public Professor buscarProf(String nome){
        return  repository.findByNome(nome);
    }

}
