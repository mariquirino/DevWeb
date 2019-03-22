package com.example.web_dev.Repository;

import com.example.web_dev.Model.Professor;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Criado por Mariana
 * Data: 21/03/2019
 **/
public interface ProfessorRepository extends JpaRepository<Professor, Long> {

    Professor findByNome(String nome);

}
