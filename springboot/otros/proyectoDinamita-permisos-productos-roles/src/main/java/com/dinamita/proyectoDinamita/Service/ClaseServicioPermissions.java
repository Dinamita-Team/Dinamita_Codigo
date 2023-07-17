package com.dinamita.proyectoDinamita.Service;

import com.dinamita.proyectoDinamita.Entity.permissions;
import com.dinamita.proyectoDinamita.Repository.PermissionsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClaseServicioPermissions implements PermissionsService {

    @Autowired
    private PermissionsRepo repo;

    @Override
    public List<permissions> ConsultarPermissions(){
        return (List<permissions>)
                this.repo.findAll();
    }

    @Override
    public permissions CrearPermissions(permissions permissions) {
        permissions.setKey(permissions.getKey());
        return this.repo.save(permissions);
    }
    /*Este código nos ayuda a actualizar los datos que queremos editar en la BD*/
    @Override
    public permissions ModificarPermissions(permissions permissions) {
        return this.repo.save(permissions);
    }

    /*Este código nos ayuda a buscar los datos del usuario mediante el ID de la BD*/
    @Override
    public permissions BuscarPermissions(int id)
    {
        return this.repo.findById(id).get();
    }

    /*Este código nos ayuda a eliminar los datos del usuario mediante su ID de la BD
     *
     * Insertamos el método como void, ya que cómo estamos eliminando datos, no nos va a devolver una información*/

    @Override
    public void EliminarPermissions(int id){
        this.repo.deleteById(id);
    }

}