package com.ramonmengarda.bookcomet.model;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder(builderMethodName = "bookBuilder")
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "book", uniqueConstraints = {@UniqueConstraint(columnNames = {"name", "authors"})})
@DiscriminatorValue("0")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class Book {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private long id;
    
    @Column(name = "name")
    @NotNull
    private String name;
    
    @Column(name = "authors")
    @NotNull
    private String authors;

    @Column(name = "publisher")
    private String publisher;
    
    @Column(name = "publishYear")
    private int publishYear;

    @Column(name = "summary")
    private String summary;
}