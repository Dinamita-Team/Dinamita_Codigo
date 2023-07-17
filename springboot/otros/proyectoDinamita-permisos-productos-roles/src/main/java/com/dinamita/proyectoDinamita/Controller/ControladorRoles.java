package com.dinamita.proyectoDinamita.Controller;


import com.dinamita.proyectoDinamita.Entity.roles;
import com.dinamita.proyectoDinamita.Service.ClaseServicioRol;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("Roles")

public class ControladorRoles {
    @Autowired
    private ClaseServicioRol csr;

    /*La anotación GetMapping nos ayuda mapear una solicitud GET*/
    @GetMapping
    /*Inicializamos la ruta para realizar el mapeo de la petición GET
     *
     * http://localhost:8083/Roles/ConsultarRoles*/
    @RequestMapping(value = "ConsultarRoles", method = RequestMethod.GET)
    /*Este método maneja la solicitud GET para consultar todas las personas que están guardadas y si los datos correcto, me mostrará una repsuesta de código HTTP 200*/
    public ResponseEntity<?> ConsultarRoles(){
        List<roles> rolList=this.csr.ConsultarRoles();
        return ResponseEntity.ok(rolList);
    }
    @PutMapping
    /*Usamos este mapeo http://localhost:8083/Roles/CrearRoles para insertar datos*/
    @RequestMapping(value = "CrearRoles", method = RequestMethod.POST)
    public ResponseEntity<?> CrearRoles(@RequestBody roles roles){
        roles rolesCrear =this.csr.CrearRoles(roles);
        return ResponseEntity.status(HttpStatus.CREATED).body(rolesCrear);
    }

    /*Usamos este mapeo http://localhost:8083/Roles/ModificarRoles para actualizar datos*/
    @PutMapping
    @RequestMapping(value = "ModificarRoles", method = RequestMethod.PUT)
    public ResponseEntity<?> ModificarRoles(@RequestBody roles roles){
        roles rolesModificar=this.csr.ModificarRoles(roles);
        return ResponseEntity.status(HttpStatus.CREATED).body(rolesModificar);
    }

    /*Usamos este mapeo http://localhost:8083/Roles/BuscarRoles/{id} para actualizar datos*/
    @GetMapping
    @RequestMapping(value = "BuscarRoles/{id}", method = RequestMethod.GET)
    /*La anotación @PatVariable nos ayuda a insertar una ruta*/
    public ResponseEntity<?> BuscarRoles(@PathVariable int id) {
        roles rolesBuscar =this.csr.BuscarRoles(id);
        return  ResponseEntity.ok(rolesBuscar);
    }

    @DeleteMapping
    @RequestMapping(value = "EliminarRoles/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> EliminarRoles(@PathVariable int id){
        this.csr.EliminarRoles(id);
        return ResponseEntity.ok().build();
    }
}
