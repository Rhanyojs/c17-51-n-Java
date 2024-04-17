package tech.nocountry.c1751njava.petadoption.User.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tech.nocountry.c1751njava.petadoption.User.Model.User;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

    Optional<User> findByUsername(String username);

    void deleteById(String id);

}
