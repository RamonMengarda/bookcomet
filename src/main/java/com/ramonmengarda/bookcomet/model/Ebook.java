package com.ramonmengarda.bookcomet.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@DiscriminatorValue("1")
public class Ebook extends Book{
    
    @NotNull
    Format format;

    @Builder(builderMethodName = "ebookBuilder")
    public Ebook(long id, String name, String authors, String publisher, int publishYear, String summary, Format format){
        super(id, name, authors, publisher, publishYear, summary);
        this.format = format;
    }
}
