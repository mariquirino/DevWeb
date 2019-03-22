package com.example.web_dev.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

/**
 * Criado por Mariana
 * Data: 20/03/2019
 **/

@Entity
@Getter
@Setter
public class Professor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

//    @Column(unique = true)
    private String matricula;

    private String email;

    private String foto;

    @ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private List<Disciplina> disciplinas;

}
