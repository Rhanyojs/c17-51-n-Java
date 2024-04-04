package tech.nocountry.c1751njava.petadoption.User;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import tech.nocountry.c1751njava.petadoption.AdoptionApplication.AdoptionApplication;
import tech.nocountry.c1751njava.petadoption.Pet.Pet;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "AM_USERS")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "ID")
    private String id;
    @Column(nullable = false, unique = true, name = "USERNAME")
    private String username;
    @Column(name = "PASSWORD")
    private String password;
    @Column(name = "FIRSTNAME")
    private String firstName;
    @Column(name = "LASTNAME")
    private String lastName;
    @Column(name = "COUNTRY")
    private String country;
    @Enumerated(EnumType.STRING)
    @Column(name = "ROLE")
    private Role role;
    @Column(name = "LOCATION")
    private String location;
    @OneToMany(mappedBy = "AM_USERS", cascade = CascadeType.ALL, orphanRemoval = true)
    @Column(name = "APPLICATION")
    private ArrayList<AdoptionApplication> adoptionApplications;
    @Column(name = "IS_BANNED")
    private Boolean isBanned;
    @OneToMany(mappedBy = "AM_USERS", cascade = CascadeType.ALL, orphanRemoval = true)
    @Column(name = "PET")
    private ArrayList<Pet> pets;



    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
