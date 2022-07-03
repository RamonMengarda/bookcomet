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
    
    @Autowired
    private BookRepository bookRepository;
    
	@Autowired
    private InventoryRepository inventoryRepository;
    @Component
    class DataSetup implements ApplicationRunner {
        @Override
        public void run(ApplicationArguments args) throws Exception {
			/*
            bookRepository.save(Book.bookBuilder().name("Cristianismo Puro e Simples").authors("C. S. Lewis").publisher("Thomas Nelson Brasil").publishYear(2017).summary("Tradução de: Mere Christianity").build());
			bookRepository.save(Book.bookBuilder().name("Cartas a Malcolm").authors("C. S. Lewis").publisher("Thomas Nelson Brasil").publishYear(2019).summary("Tradução de: The Screwtape Letters").build());
			bookRepository.save(Book.bookBuilder().name("Cartas de um Diabo a seu Aprendiz").authors("C. S. Lewis").publisher("Thomas Nelson Brasil").publishYear(2017).summary("Tradução de: Letters to Malcolm, chiefly on paper").build());
			bookRepository.save(Book.bookBuilder().name("O Arqueiro").authors("Bernard Cornwell").publisher("Record").publishYear(2015).summary("A busca do graal; 1").build());
			bookRepository.save(Book.bookBuilder().name("O Andarilho").authors("Bernard Cornwell").publisher("Record").publishYear(2015).summary("A busca do graal; 2").build());
			bookRepository.save(Book.bookBuilder().name("O Herege").authors("Bernard Cornwell").publisher("Record").publishYear(2015).summary("A busca do graal; 3").build());
			bookRepository.save(Book.bookBuilder().name("O Rei do Inverno").authors("Bernard Cornwell").publisher("Record").publishYear(2015).summary("As crônicas de Artur; v.1").build());
			bookRepository.save(Book.bookBuilder().name("O Inimigo de Deus").authors("Bernard Cornwell").publisher("Record").publishYear(2015).summary("As crônicas de Artur; v.2").build());
			bookRepository.save(Book.bookBuilder().name("Excalibur").authors("Bernard Cornwell").publisher("Record").publishYear(2015).summary("As crônicas de Artur; v.3").build());
			bookRepository.save(Book.bookBuilder().name("A Batalha do Apocalipse").authors("Eduardo Spohr").publisher("Verus").publishYear(2014).summary("Tetralogia Angélica; v.1").build());
			bookRepository.save(Book.bookBuilder().name("Anjos da Morte").authors("Eduardo Spohr").publisher("Verus").publishYear(2014).summary("Tetralogia Angélica; v.2").build());
			bookRepository.save(Book.bookBuilder().name("Paraíso Perdido").authors("Eduardo Spohr").publisher("Verus").publishYear(2015).summary("Tetralogia Angélica; v.3").build());
			bookRepository.save(Book.bookBuilder().name("Herdeiros de Atlântida").authors("Eduardo Spohr").publisher("Verus").publishYear(2015).summary("Tetralogia Angélica; v.4").build());
			bookRepository.save(Book.bookBuilder().name("Políticas Educacionais: conceitos e debates").authors("Ângelo Ricardo de Souza; Andréa Barbosa Gouveia; Taís Moura Tavares").publisher("Appris").publishYear(2016).summary("Políticas Educacionais: conceitos e debates").build());
			bookRepository.save(Ebook.ebookBuilder().name("O Conto da Aia").authors("Margaret Atwood").publisher("Rocco").publishYear(2017).summary("Tradução de: The Handmaid's Tale").format(Format.PDF).build());
			
			Book santoGuerreiro = Book.bookBuilder().name("Santo guerreiro: Roma Invicta").authors("Eduardo Spohr").publisher("Verus").publishYear(2020).summary("Santo Guerreiro; 1").build();
			bookRepository.save(santoGuerreiro);

			Ebook oPequenoPrincipe = Ebook.ebookBuilder().name("O Pequeno Prícipe").authors("Antoine de Saint-Exupéry").publisher("Agir").publishYear(2009).summary("Tradução de: Le petit prince").format(Format.EPUB).build();
			bookRepository.save(oPequenoPrincipe);

			inventoryRepository.save(Inventory.inventoryBuilder().book(santoGuerreiro).quantity(3).build());
			inventoryRepository.save(Inventory.inventoryBuilder().book(oPequenoPrincipe).quantity(2).build()); */
        }
    }

    public static void main(String[] args) {
        SpringApplication.run(BookcometApplication.class, args);
    }

}