package com.example.web_dev.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

/**
 * Criado por Mariana
 * Data: 22/03/2019
 **/

@Entity
@Getter
@Setter
public class Disciplina {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @Column(unique = true)
    private String cod;

    private String descricao;

    private String cred;

//    @ManyToMany(fetch = FetchType.LAZY)
//    private List<Professor> professores;

}
