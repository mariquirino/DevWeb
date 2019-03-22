package com.example.web_dev.Service;

import com.example.web_dev.Model.Disciplina;
import com.example.web_dev.Repository.DisciplinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DisciplinaService {

    @Autowired
    private DisciplinaRepository repository;

    public List<Disciplina> listar() {
        return repository.findAll();
    }

    public ResponseEntity salvar(Disciplina disc) {
        if (disc.getCod() == null || disc.getCod().isEmpty()) {
            return ResponseEntity.ok("Codigo enviado invalido");
        }
        repository.save(disc);
        return ResponseEntity.ok("Disciplina inserida com sucesso");
    }
}