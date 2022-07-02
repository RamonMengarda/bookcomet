package com.ramonmengarda.bookcomet.inventory;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.ramonmengarda.bookcomet.model.Book;

@RepositoryRestResource(collectionResourceRel = "books", path = "books")
public interface BookInventory extends PagingAndSortingRepository<Book, Long> {
	//
}