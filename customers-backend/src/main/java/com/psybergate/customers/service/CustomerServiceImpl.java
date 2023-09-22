package com.psybergate.customers.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import com.psybergate.customers.repository.CustomerRepository;
import com.psybergate.customers.model.Customer;

@Service("customerService")
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;
    
    @Override
    public List<Customer> fetchAllCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Customer fetchCustomerById(Long id) {
        return customerRepository.getReferenceById(id);
    }

    @Override
    public void saveCustomer(Customer customer) {
        customerRepository.saveAndFlush(customer);
    }
}
