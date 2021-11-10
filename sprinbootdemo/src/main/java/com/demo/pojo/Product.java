package com.demo.pojo;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OrderColumn;
import javax.persistence.Table;

// adding the association in pojo

@Entity
@Table(name = "product")
public class Product {
	
	@Id
	@GeneratedValue
	private long id;
	
	private String productname;
	private String productsummary;
	
	

	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getProductname() {
		return productname;
	}
	public void setProductname(String productname) {
		this.productname = productname;
	}
	public String getProductsummary() {
		return productsummary;
	}
	public void setProductsummary(String productsummary) {
		this.productsummary = productsummary;
	}

	

}
