package com.ramonmengarda.bookcomet;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

import com.google.common.collect.Lists;
import com.google.common.collect.Sets;
import com.ramonmengarda.bookcomet.model.Book;
import com.ramonmengarda.bookcomet.model.Inventory;
import com.ramonmengarda.bookcomet.model.Ebook;
import com.ramonmengarda.bookcomet.model.Format;
import com.ramonmengarda.bookcomet.repository.InventoryRepository;
import com.ramonmengarda.bookcomet.repository.BookRepository;

@SpringBootApplication
public class BookcometApplication {
    public static void main(String[] args) {
        SpringApplication.run(BookcometApplication.class, args);
    }
}