import React, { useRef, useState } from 'react';
import axios from 'axios';

const DeleteRecord = () => {
  const [res, setRes] = useState({});
  const ref = useRef(null);

  const deleteRecord = async () => {
    const response = await axios.delete(`http://localhost:9001/delete/${ref.current.value}`);
    setRes(response.data);
  };

  return (
    <form>
      <center><h2>Delete Record</h2></center>
      <center>
      <label>
        Consumer ID:
        <input type="text" ref={ref} />
      </label>
      </center>
      <br />
      <center> <button type="button" onClick={deleteRecord}>Delete</button> </center>
      <p>{JSON.stringify(res)}</p>
    </form>
  );
};

export default DeleteRecord;
