package com.dinamita.dinamitademo.Repository;


import com.dinamita.dinamitademo.Entity.products;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductsRepo extends CrudRepository <products, Integer> {
}
