package com.dinamita.proyectoDinamita.Service;

import com.dinamita.proyectoDinamita.Entity.permissions;

import java.util.List;

public interface PermissionsService {
    //La colecction List nos ayuda a crear una lista (PETICIÓN GET)
    public List<permissions> ConsultarPermissions();

    //Vamos a realizar el método para realizar la PETICIÓN POST
    public permissions CrearPermissions(permissions permissions);

    //Vamos a realizar el método para realizar la PETICIÓN PUT
    public permissions ModificarPermissions(permissions permissions);

    //Vamos a realizar el método para buscar las personas
    public permissions BuscarPermissions(int id);

    //Vamos a realizar el método para realizar la PETICIÓN DELETE
    //Le colocamos el método void para que no nos devuelva un valor
    public void EliminarPermissions(int id);
}


