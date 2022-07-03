package com.ramonmengarda.bookcomet.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
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
@Table(name="inventory")
public class Inventory {
    
    @Id
    @GeneratedValue
    @Column(name="id")
    private long id;
    
    @NotNull
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "book_id", referencedColumnName = "id")
    private Book book;
    
    @PositiveOrZero
    private int quantity;
}
