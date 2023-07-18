package com.dinamita.proyectoDinamita.Controller;

import com.dinamita.proyectoDinamita.Entity.permissions;
import com.dinamita.proyectoDinamita.Service.ClaseServicioPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("Permissions")

public class ControladorPermissions {
    @Autowired
    private ClaseServicioPermissions csu;

    /*La anotación GetMapping nos ayuda mapear una solicitud GET*/
    @GetMapping
    /*Inicializamos la ruta para realizar el mapeo de la petición GET
     *
     * http:localhost:8083/Permissions/ConsultarPermissions*/
    @RequestMapping(value = "ConsultarPermissions", method = RequestMethod.GET)
    /*Este método maneja la solicitud GET para consultar todas las personas que están guardadas y si los datos correcto, me mostrará una repsuesta de código HTTP 200*/
    public ResponseEntity<?> ConsultarPermissions(){
        List<permissions> permissionsList=this.csu.ConsultarPermissions();
        return ResponseEntity.ok(permissionsList);
    }
    @PutMapping
    /*Usamos este mapeo http:localhost:8083/Permissions/CrearPermissions para insertar datos*/
    @RequestMapping(value = "CrearPermissions", method = RequestMethod.POST)
    public ResponseEntity<?> CrearPermissions(@RequestBody permissions permissions){
        permissions permissionsCrear =this.csu.CrearPermissions(permissions);
        return ResponseEntity.status(HttpStatus.CREATED).body(permissionsCrear);
    }

    /*Usamos este mapeo http:localhost:8083/Permissions/ModificarPermissions para actualizar datos*/
    @PutMapping
    @RequestMapping(value = "ModificarPermissions", method = RequestMethod.PUT)
    public ResponseEntity<?> ModificarPermissions(@RequestBody permissions permissions){
        permissions permissionsSModificar=this.csu.ModificarPermissions(permissions);
        return ResponseEntity.status(HttpStatus.CREATED).body(permissionsSModificar);
    }

    /*Usamos este mapeo http:localhost:8083/Permissions/BuscarPermissions/{id} para actualizar datos*/
    @GetMapping
    @RequestMapping(value = "BuscarPermissions/{id}", method = RequestMethod.GET)
    /*La anotación @PatVariable nos ayuda a insertar una ruta*/
    public ResponseEntity<?> BuscarPermissions(@PathVariable int id) {
        permissions permissionsBuscar =this.csu.BuscarPermissions(id);
        return  ResponseEntity.ok(permissionsBuscar);
    }

    @DeleteMapping
    @RequestMapping(value = "EliminarPermissions/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> EliminarPermissions(@PathVariable int id){
        this.csu.EliminarPermissions(id);
        return ResponseEntity.ok().build();
    }
}