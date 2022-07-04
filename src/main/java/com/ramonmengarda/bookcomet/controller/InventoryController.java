package com.ramonmengarda.bookcomet.controller;

import com.google.common.collect.Lists;
import com.ramonmengarda.bookcomet.model.Book;
import com.ramonmengarda.bookcomet.model.Inventory;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
import com.ramonmengarda.bookcomet.repository.InventoryRepository;

@RestController
@RequestMapping("/inventory")
@CrossOrigin
public class InventoryController {

    private final InventoryRepository inventoryRepository;

    public InventoryController(InventoryRepository inventoryRepository){
        this.inventoryRepository = inventoryRepository;
    }

    @GetMapping
    public List<Inventory> getInventory(){
        return Lists.newArrayList(inventoryRepository.findAll());
    }
}
