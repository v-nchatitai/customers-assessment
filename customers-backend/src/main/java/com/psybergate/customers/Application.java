package com.psybergate.customers;

import com.psybergate.customers.model.Customer;
import com.psybergate.customers.repository.CustomerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    CommandLineRunner init(CustomerRepository customerRepository) {
        return args -> {
            Customer customer01 =  new Customer();
            customer01.setFirstName("Atwell");
            customer01.setLastName("Khumalo");
            customer01.setCellphoneNumber("0000 55555");
            customer01.setStreetAddress01("ePoso");
            customer01.setStreetAddress02("eRandburg");
            customer01.setCityOrTown("eGoli");
            customer01.setPostalCode("0001");
            
            Customer customer02 =  new Customer();
            customer02.setFirstName("Naheem");
            customer02.setLastName("Saley");
            customer02.setCellphoneNumber("0000 77777");
            customer02.setStreetAddress01("ePoso");
            customer02.setStreetAddress02("eRandburg");
            customer02.setCityOrTown("eGoli");
            customer02.setPostalCode("0001");
            
            customerRepository.save(customer01);
            customerRepository.save(customer02);
            customerRepository.findAll().forEach(System.out::println);
        };
    }
}
