import React, { useRef, useState } from 'react';
import axios from 'axios';

const UpdateRecord = () => {
  const [res, setRes] = useState({});
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const updateRecord = async () => {
    const response = await axios.put(`http://localhost:9001/update/${ref1.current.value}`, {
      conName: ref2.current.value,
      cReading: ref3.current.value,
      pReading: ref4.current.value,
    });
    setRes(response.data);
  };

  return (
    <form>
      <center><h2>Update Record</h2></center>
      <label>
        Consumer ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" ref={ref1} />
      </label>
      <br />
      <label>
        New Consumer Name:
        <input type="text" ref={ref2} />
      </label>
      <br />
      <label>
        New Current Reading:
        <input type="text" ref={ref3} />
      </label>
      <br />
      <label>
        New Previous Reading:
        <input type="text" ref={ref4} />
      </label>
      <br />
      <center> <button type="button" onClick={updateRecord}>Update</button></center>
      <p>{JSON.stringify(res)}</p>
    </form>
  );
};

export default UpdateRecord;
