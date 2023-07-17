package com.dinamita.proyectoDinamita.Repository;

import com.dinamita.proyectoDinamita.Entity.permissions;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PermissionsRepo extends CrudRepository<permissions, Integer> {
}
