package com.ramonmengarda.bookcomet.repository;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.ramonmengarda.bookcomet.model.Book;

@RepositoryRestResource(collectionResourceRel = "books", path = "books")
public interface BookRepository extends PagingAndSortingRepository<Book, Long> {
    //Find book by publisher name
    List<Book> findByPublisher(String publisher);
    
    //Find book by name - or part of the name of an author
    List<Book> findByAuthorsContaining(String authors);
}