package tech.nocountry.c1751njava.petadoption.Request.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.nocountry.c1751njava.petadoption.Request.Request;

public interface RequestRepository extends JpaRepository<Request,String> {
}
