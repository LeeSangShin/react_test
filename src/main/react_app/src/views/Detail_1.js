import React, { Component } from 'react';
import { useState, useEffect } from 'react';
export default function Detail_1() {
    const [userList, setUserList] = useState([]);
      function getAllUser(){
              fetch("/api/getAllUser")
              .then(response => response.json())
              .then(data => {
                setUserList(data);
                console.log(JSON.stringify(data));
                console.log(JSON.parse(JSON.stringify(data)));
              })
              .catch(error => console.error(error));
      }
    return (
        <>
        <p>
              여기는 DETAIL PAGE 1 입니다.
        </p>
        <button onClick={getAllUser}>SEARCH USER</button>
        <p>
             백엔드 서버로부터 받은 유저목록: {JSON.stringify(userList)}
        </p>
        <ul>
              {userList.map((item, index) => (
                  <li key={index}>
                    <div>{item.id}</div>
                    <div>{item.name}</div>
                    <div>{item.age}</div>
                  </li>
              ))}
            </ul>
        </>
    )
}