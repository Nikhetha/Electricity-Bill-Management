package com.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.web.model.EleBillModel;
import com.web.service.EleBillService_Imple;

@RestController
@CrossOrigin(origins= {"*"})
public class EleBillController 
{
    @Autowired
    private EleBillService_Imple service;
    
  @PostMapping("/save")
  public String saveEleBill(@RequestBody EleBillModel elebill)
  {
    EleBillModel saveData=service.saveBill(elebill);
    String message=null;
    
    if(saveData!=null)
    {
      message="DATA IS SAVED SUCCESSFULLY ";
    }
    else
    {
      message="DATA IS NOT SAVED";
    }
    return message;
  }
  
  @GetMapping("/getone/{conId}")
  public EleBillModel getOneRecord(@PathVariable int conId)
  {
    EleBillModel getone=service.getOneBill(conId);
    return getone;
  }
  
  @GetMapping("/getall")
  public List<EleBillModel>getAllConsumers()
  {
    List<EleBillModel>getall=service.getAllBills();
    return getall;
  }
  
  @DeleteMapping("/delete/{conId}")
  public String deleterecord(@PathVariable int conId)
  {
      service.deleteBill(conId);
      return "Record is Deleted Successfully";
  }
  
  @PutMapping("/update/{conId}")
  public EleBillModel updatebill(@RequestBody EleBillModel ele,@PathVariable int conId)
  {
    EleBillModel updaterecord=service.updateBill(ele,conId);
    return updaterecord;
  }
}
