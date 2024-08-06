import React, { useRef, useState } from 'react';
import axios from 'axios';

const PostRecord = () => {
  const [res, setRes] = useState({});
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const postRecord = async () => {
    const response = await axios.post('http://localhost:9001/save', {
      conName: ref1.current.value,
      cReading: ref2.current.value,
      pReading: ref3.current.value,
    });
    setRes(response.data);
  };

  return (
    <form>
      <center><h2>Upload Record</h2></center>
      <label>
        Consumer Name:
        <input type="text" ref={ref1} />
      </label>
      <br />
      <label>
        Current Reading:
        <input type="text" ref={ref2} />
      </label>
      <br />
      <label>
        Previous Reading:
        <input type="text" ref={ref3} />
      </label>
      <br />
      <center> <button type="button" onClick={postRecord}>Post</button> </center>
      <p>{JSON.stringify(res)}</p>
    </form>
  );
};

export default PostRecord;
