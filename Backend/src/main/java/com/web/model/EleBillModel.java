package com.web.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class EleBillModel 
{
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
   private int conId;
    
   private String conName;
   private int cReading;
   private int pReading;
   private int units; 
   private double serviceChrg;   
   private double totalBill;
  
   public EleBillModel() 
   {
    super();
  }

  public EleBillModel(int conId, String conName, int cReading, int pReading, int units, double serviceChrg,
      double totalBill) 
  {
    super();
    this.conId = conId;
    this.conName = conName;
    this.cReading = cReading;
    this.pReading = pReading;
    this.units = units;
    this.serviceChrg = serviceChrg;
    this.totalBill = totalBill;
  }

  public int getConId() {
    return conId;
  }

  public void setConId(int conId) {
    this.conId = conId;
  }

  public String getConName() {
    return conName;
  }

  public void setConName(String conName) {
    this.conName = conName;
  }

  public int getcReading() {
    return cReading;
  }

  public void setcReading(int cReading) {
    this.cReading = cReading;
  }

  public int getpReading() {
    return pReading;
  }

  public void setpReading(int pReading) {
    this.pReading = pReading;
  }

  public int getUnits() {
    return units;
  }

  public void setUnits(int units) {
    this.units = units;
  }

  public double getServiceChrg() {
    return serviceChrg;
  }

  public void setServiceChrg(double serviceChrg) {
    this.serviceChrg = serviceChrg;
  }

  public double getTotalBill() {
    return totalBill;
  }

  public void setTotalBill(double totalBill) {
    this.totalBill = totalBill;
  }

  @Override
  public String toString() 
  {
    return "EleBillModel [conId=" + conId + ", conName=" + conName + ", cReading=" + cReading + ", pReading="
        + pReading + ", units=" + units + ", serviceChrg=" + serviceChrg + ", totalBill=" + totalBill + "]";
  }  
   
   
}
