package com.dinamita.proyectoDinamita.Service;

import com.dinamita.proyectoDinamita.Entity.products;
import com.dinamita.proyectoDinamita.Repository.ProductsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClaseServicioProducts implements ProductsService {

    @Autowired
    private ProductsRepo repo;

    @Override
    public List<products> Consultarproducts(){
        return (List<products>)
                this.repo.findAll();
    }

    @Override
    public products Crearproducts(products products) {
        products.setName(products.getName());
        return this.repo.save(products);
    }
    /*Este código nos ayuda a actualizar los datos que queremos editar en la BD*/
    @Override
    public products Modificarproducts(products products) {
        return this.repo.save(products);
    }

    /*Este código nos ayuda a buscar los datos del usuario mediante el ID de la BD*/
    @Override
    public products Buscarproducts(int id)
    {
        return this.repo.findById(id).get();
    }

    /*Este código nos ayuda a eliminar los datos del usuario mediante su ID de la BD
     *
     * Insertamos el método como void, ya que cómo estamos eliminando datos, no nos va a devolver una información*/

    @Override
    public void Eliminarproducts(int id){
        this.repo.deleteById(id);
    }
}
