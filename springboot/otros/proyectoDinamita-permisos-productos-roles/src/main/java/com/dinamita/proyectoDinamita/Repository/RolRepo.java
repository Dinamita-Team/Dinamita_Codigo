package com.dinamita.proyectoDinamita.Repository;

import com.dinamita.proyectoDinamita.Entity.roles;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RolRepo extends CrudRepository<roles, Integer> {
}
