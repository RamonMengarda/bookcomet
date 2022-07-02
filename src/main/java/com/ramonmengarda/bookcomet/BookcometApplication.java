package com.ramonmengarda.bookcomet;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

import com.ramonmengarda.bookcomet.model.Book;
import com.ramonmengarda.bookcomet.inventory.BookInventory;

@SpringBootApplication
public class BookcometApplication {
    
    @Autowired
    private BookInventory bookInventory;
    
    @Component
    class DataSetup implements ApplicationRunner {
        @Override
        public void run(ApplicationArguments args) throws Exception {
            final ArrayList<String> authors = new ArrayList<String>();
            authors.add("C. S. Lewis");
            bookInventory.save(Book.builder().name("As Crônicas de Nárnia").authors(authors).publisher("Editora 1").publishYear(1901).summary("Esqueceram as crianças no meio da neve...").build());
        }
    }

    public static void main(String[] args) {
        SpringApplication.run(BookcometApplication.class, args);
    }

}