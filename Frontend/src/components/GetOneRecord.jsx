import React, { useRef, useState } from 'react';
import axios from 'axios';

const GetOneRecord = () => {
  const [res, setRes] = useState(null);
  const [error, setError] = useState(null);
  const ref = useRef(null);

  const getRecord = async () => {
    setError(null);
    const id = ref.current.value.trim();

    if (!id) {
      setError('Consumer ID is required.');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:9001/getone/${id}`);
      setRes(response.data);
    } catch (error) {
      console.error('Error fetching record:', error);
      setError('Failed to fetch record.');
    }
  };

  return (
    <>
      <form>
        <center><h2>Get One Record</h2></center>
        <center>
        <label>
          Consumer ID:
          <input type="text" ref={ref} />
        </label>
        </center>
        <br />
        <center><button type="button" onClick={getRecord}>Get</button></center>
        {error && <p className="error-message">{error}</p>}
      </form>
      {res && (
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
            <tr>
              <td>{res.conId}</td>
              <td>{res.conName}</td>
              <td>{res.cReading}</td>
              <td>{res.pReading}</td>
              <td>{res.units}</td>
              <td>{res.serviceChrg}</td>
              <td>{res.totalBill}</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

export default GetOneRecord;
