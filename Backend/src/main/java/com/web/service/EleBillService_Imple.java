package com.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.model.EleBillModel;
import com.web.repository.EleBillRepo;

@Service
public class EleBillService_Imple implements EleBillService 
{
    @Autowired
    private EleBillRepo repo;
  
  @Override
  public EleBillModel saveBill(EleBillModel ele)
  {
     double serviceChrg=120.00;
        double totalBill=0.0;
     int units=ele.getcReading()-ele.getpReading();
           
      if(units<300)
           {
             totalBill=units*1.75;
           }
           
           else if(units>=300 && units<500)
        {
          totalBill=(300*1.75)+(units-300)*3.25;
        }

        else
        {         
           totalBill = (300*1.75) + ((units-(units-500))-300)*3.25 + (units-500)*7.25;
        }
           
           ele.setUnits(units);
           ele.setTotalBill(totalBill);
           ele.setServiceChrg(serviceChrg);

           EleBillModel saveEleBill=repo.save(ele);
      return saveEleBill;
  }

  @Override
  public EleBillModel updateBill(EleBillModel ele, int conId)
  {
     EleBillModel oldrecord=repo.findById(conId).get();
     
     double serviceChrg=120.00;
        double totalBill=0.0;
     int units=ele.getcReading()-ele.getpReading();
           
      if(units<300)
           {
             totalBill=units*1.75;
           }
           
           else if(units>=300 && units<500)
        {
          totalBill=(300*1.75)+(units-300)*3.25;
        }

        else
        {         
           totalBill = (300*1.75) + ((units-(units-500))-300)*3.25 + (units-500)*7.25;
        }
           
      oldrecord.setConId(conId);
      oldrecord.setConName(ele.getConName());
      oldrecord.setcReading(ele.getcReading());
      oldrecord.setpReading(ele.getpReading());
      oldrecord.setUnits(units);
      oldrecord.setServiceChrg(serviceChrg);
      oldrecord.setTotalBill(totalBill);    
           return repo.save(oldrecord);    
  }

  @Override
  public EleBillModel getOneBill(int conId) 
  {
    EleBillModel getone=repo.findById(conId).get();
    return getone;
  }
  
  @Override
  public List<EleBillModel> getAllBills()
  {
    List<EleBillModel> getall=repo.findAll();
    return getall;
  }

  @Override
  public void deleteBill(int conId) 
  {
        repo.deleteById(conId);
  }

}
