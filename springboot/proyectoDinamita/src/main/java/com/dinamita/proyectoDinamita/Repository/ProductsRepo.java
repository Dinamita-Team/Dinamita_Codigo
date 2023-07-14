package com.dinamita.proyectoDinamita.Repository;


import com.dinamita.proyectoDinamita.Entity.products;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductsRepo extends CrudRepository <products, Integer> {
}
