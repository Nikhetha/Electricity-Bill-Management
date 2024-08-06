import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetAllRecords = () => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:9001/getall');
        setArr(res.data);
      } catch (error) {
        console.error('Error fetching records:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h2> All Records</h2>
      <table className="record-table">
        <thead>
          <tr>
            <th>CID</th>
            <th>CNAME</th>
            <th>CURRENT READING</th>
            <th>PREVIOUS READING</th>
            <th>UNITS</th>
            <th>SERVICE CHARGES</th>
            <th>TOTAL BILL</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((record) => (
            <tr key={record.conId}>
              <td>{record.conId}</td>
              <td>{record.conName}</td>
              <td>{record.cReading}</td>
              <td>{record.pReading}</td>
              <td>{record.units}</td>
              <td>{record.serviceChrg}</td>
              <td>{record.totalBill}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetAllRecords;
