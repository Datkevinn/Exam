
import React, { Component, useEffect, useState } from "react";
import axios from "axios";

const API = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // anonymous function and IIFE
    void (async () => {
      try {
        const res = await axios.get(
          "https://65ad0b0dadbd5aa31bdff978.mockapi.io/api/books"
        );
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div className="list" onClick={() => dispatch(increment())}>
          <img src="https://loremflickr.com/640/480/business" alt="thumnail" />
          <p>{item.name}</p>
          <span>{item.expiredAt}</span>
          <p>{item.author}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};


export default API;
