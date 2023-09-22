package com.psybergate.customers.model;

import jakarta.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="customers")
public class Customer implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "cellphone_number")
    private String cellphoneNumber;
    @Column(name = "street_address_01")
    private String streetAddress01;
    @Column(name = "street_address_02")
    private String streetAddress02;
    @Column(name = "city_or_town")
    private String cityOrTown;
    @Column(name = "postal_code")
    private String postalCode;
    @Column(name = "p_address_01")
    private String pAddress01;
    @Column(name = "p_address_02")
    private String pAddress02;
    @Column(name = "p_city_or_town")
    private String pCityOrTown;
    @Column(name = "p_postal_code")
    private String pPostalCode;
    @Column(name = "comments")
    private String comments;

    public Customer() {
    }

    public Customer(long id, String firstName, String lastName, String cellphoneNumber, String streetAddress01, String streetAddress02, String cityOrTown, String postalCode, String pAddress01, String pAddress02, String pCityOrTown, String pPostalCode, String comments) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.cellphoneNumber = cellphoneNumber;
        this.streetAddress01 = streetAddress01;
        this.streetAddress02 = streetAddress02;
        this.cityOrTown = cityOrTown;
        this.postalCode = postalCode;
        this.pAddress01 = pAddress01;
        this.pAddress02 = pAddress02;
        this.pCityOrTown = pCityOrTown;
        this.pPostalCode = pPostalCode;
        this.comments = comments;
    }

    public long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCellphoneNumber() {
        return cellphoneNumber;
    }

    public void setCellphoneNumber(String cellphoneNumber) {
        this.cellphoneNumber = cellphoneNumber;
    }

    public String getStreetAddress01() {
        return streetAddress01;
    }

    public void setStreetAddress01(String streetAddress01) {
        this.streetAddress01 = streetAddress01;
    }

    public String getStreetAddress02() {
        return streetAddress02;
    }

    public void setStreetAddress02(String streetAddress02) {
        this.streetAddress02 = streetAddress02;
    }

    public String getCityOrTown() {
        return cityOrTown;
    }

    public void setCityOrTown(String cityOrTown) {
        this.cityOrTown = cityOrTown;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getpAddress01() {
        return pAddress01;
    }

    public void setpAddress01(String pAddress01) {
        this.pAddress01 = pAddress01;
    }

    public String getpAddress02() {
        return pAddress02;
    }

    public void setpAddress02(String pAddress02) {
        this.pAddress02 = pAddress02;
    }

    public String getpCityOrTown() {
        return pCityOrTown;
    }

    public void setpCityOrTown(String pCityOrTown) {
        this.pCityOrTown = pCityOrTown;
    }

    public String getpPostalCode() {
        return pPostalCode;
    }

    public void setpPostalCode(String pPostalCode) {
        this.pPostalCode = pPostalCode;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    @Override
    public String toString() {
        return "Customer{" + "id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", cellphoneNumber=" + cellphoneNumber + ", streetAddress01=" + streetAddress01 + ", streetAddress02=" + streetAddress02 + ", cityOrTown=" + cityOrTown + ", postalCode=" + postalCode + ", postalAddress01=" + pAddress01 + ", postalAddress02=" + pAddress02 + ", postalCityOrTown=" + pCityOrTown + ", postalPostalCode=" + pPostalCode + ", comments=" + comments + '}';
    }
}
