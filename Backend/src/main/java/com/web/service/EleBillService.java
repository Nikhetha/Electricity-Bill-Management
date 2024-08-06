package com.web.service;

import java.util.List;

import com.web.model.EleBillModel;

public interface EleBillService 
{
    public EleBillModel saveBill(EleBillModel ele);
    public EleBillModel updateBill(EleBillModel ele,int conId);
    public EleBillModel getOneBill(int conId);
    public List<EleBillModel> getAllBills();
    public void deleteBill(int conId);
}
