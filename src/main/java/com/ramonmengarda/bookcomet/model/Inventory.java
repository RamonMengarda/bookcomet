package com.ramonmengarda.bookcomet.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PositiveOrZero;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder(builderMethodName = "inventoryBuilder")
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name="inventory", uniqueConstraints = {@UniqueConstraint(columnNames = {"book_id"})})
public class Inventory {
    
    @Id
    @GeneratedValue
    @Column(name="id")
    private long id;
    
    @NotNull
    //Relatioship definition between Inventory and Book is 121, primary and foreign key are the id fields on each table
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "book_id", referencedColumnName = "id")
    private Book book;
    
    @PositiveOrZero
    private int quantity;
}
