package tech.nocountry.c1751njava.petadoption;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class PetAdoptionApplication {

	//modela de Dto a Entity Y Viceversa
	//********************************
	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}

	public static void main(String[] args) {
		SpringApplication.run(PetAdoptionApplication.class, args);
	}

}
