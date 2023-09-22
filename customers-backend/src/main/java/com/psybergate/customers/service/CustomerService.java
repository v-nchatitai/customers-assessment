package com.psybergate.customers.service;

import java.util.List;
import com.psybergate.customers.model.Customer;

public interface CustomerService {

    List<Customer> fetchAllCustomers();

    void saveCustomer(Customer customer);
   
    Customer fetchCustomerById(Long id);
}
