package com.dinamita.proyectoDinamita.Service;

import com.dinamita.proyectoDinamita.Entity.roles;

import java.util.List;

public interface RolService {


    public List<roles> ConsultarRoles();

    //Vamos a realizar el método para realizar la PETICIÓN POST
    public roles CrearRoles(roles roles);

    //Vamos a realizar el método para realizar la PETICIÓN PUT
    public roles ModificarRoles(roles roles);

    //Vamos a realizar el método para buscar las personas
    public roles BuscarRoles(int id);

    //Vamos a realizar el método para realizar la PETICIÓN DELETE
    //Le colocamos el método void para que no nos devuelva un valor
    public void EliminarRoles(int id);
}
