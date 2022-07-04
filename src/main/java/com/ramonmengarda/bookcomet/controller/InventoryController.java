package com.ramonmengarda.bookcomet.controller;

import com.google.common.collect.Lists;

import com.ramonmengarda.bookcomet.model.Inventory;
import com.ramonmengarda.bookcomet.repository.InventoryRepository;

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
import org.springframework.web.bind.annotation.RestController;

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

    @GetMapping("/{id}")
    public Inventory getInventory(@PathVariable Long id){
        return inventoryRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createInventory(@RequestBody Inventory inventory) throws URISyntaxException {
        Inventory savedInventory = inventoryRepository.save(inventory);
        return ResponseEntity.created(new URI("/inventory/" + savedInventory.getId())).body(savedInventory);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateInventory(@PathVariable Long id, @RequestBody Inventory inventory) {
        Inventory currentInventory = inventoryRepository.findById(id).orElseThrow(RuntimeException::new);
        currentInventory.setBook(inventory.getBook());
        currentInventory.setQuantity(inventory.getQuantity());
        currentInventory = inventoryRepository.save(inventory);

        return ResponseEntity.ok(currentInventory);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteInventory(@PathVariable Long id) {
        inventoryRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
