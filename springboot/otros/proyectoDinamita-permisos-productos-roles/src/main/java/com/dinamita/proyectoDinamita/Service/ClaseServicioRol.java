package com.dinamita.proyectoDinamita.Service;


import com.dinamita.proyectoDinamita.Entity.roles;
import com.dinamita.proyectoDinamita.Repository.RolRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClaseServicioRol implements RolService {

    @Autowired
    private RolRepo repo;

    @Override
    public List<roles> ConsultarRoles(){
        return (List<roles>)
                this.repo.findAll();
    }

    @Override
    public roles CrearRoles(roles roles) {
        roles.setName(roles.getName());
        return this.repo.save(roles);
    }
    /*Este código nos ayuda a actualizar los datos que queremos editar en la BD*/
    @Override
    public roles ModificarRoles(roles roles) {
        return this.repo.save(roles);
    }

    /*Este código nos ayuda a buscar los datos del usuario mediante el ID de la BD*/
    @Override
    public roles BuscarRoles(int id)
    {
        return this.repo.findById(id).get();
    }

    /*Este código nos ayuda a eliminar los datos del usuario mediante su ID de la BD
     *
     * Insertamos el método como void, ya que cómo estamos eliminando datos, no nos va a devolver una información*/

    @Override
    public void EliminarRoles(int id){
        this.repo.deleteById(id);
    }

}
