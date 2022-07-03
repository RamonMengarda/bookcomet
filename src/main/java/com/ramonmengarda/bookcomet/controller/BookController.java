package com.ramonmengarda.bookcomet.controller;

import com.google.common.collect.Lists;
import com.ramonmengarda.bookcomet.model.Book;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ramonmengarda.bookcomet.repository.BookRepository;

@RestController
@RequestMapping("/books")
public class BookController {

    private final BookRepository bookRepository;

    public BookController(BookRepository bookRepository){
        this.bookRepository = bookRepository;
    }

    @GetMapping
    public List<Book> getBooks(){
        return Lists.newArrayList(bookRepository.findAll());
    }
    
    @GetMapping("/{id}")
    public Book getBook(@PathVariable Long id){
        return bookRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createBook(@RequestBody Book book) throws URISyntaxException {
        Book savedBook = bookRepository.save(book);
        return ResponseEntity.created(new URI("/books/" + savedBook.getId())).body(savedBook);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateBook(@PathVariable Long id, @RequestBody Book book) {
        Book currentBook = bookRepository.findById(id).orElseThrow(RuntimeException::new);
        currentBook.setName(book.getName());
        //currentBook.setAuthors(book.getAuthors());
        currentBook.setPublisher(book.getPublisher());
        currentBook.setPublishYear(book.getPublishYear());
        currentBook.setSummary(book.getSummary());
        currentBook = bookRepository.save(book);

        return ResponseEntity.ok(currentBook);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteBook(@PathVariable Long id) {
        bookRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/publisher")
    public List<Book> getBooksByPublisher(@RequestParam String publisher){
        return bookRepository.findByPublisher(publisher);
    }
    
    @GetMapping("/author")
    public List<Book> getBooksByAuthor(@RequestParam String author){
        return bookRepository.findByAuthorsContaining(author);
    }
}
