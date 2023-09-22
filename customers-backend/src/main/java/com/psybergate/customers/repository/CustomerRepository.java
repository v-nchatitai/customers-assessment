package com.psybergate.customers.repository;

import com.psybergate.customers.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author v-nchatitai
 */
@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
