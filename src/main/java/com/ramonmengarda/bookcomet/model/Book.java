package com.ramonmengarda.bookcomet.model;

import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Book {

    @Id
    @GeneratedValue
    private long id;

    @NotNull
    private String name;
    
    @NotEmpty
    private ArrayList<String> authors;
 
    @NotNull
    private String publisher;
    
    @Positive
    private int publishYear;
    
    @NotNull
    private String summary;
}