import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';

export default function ConnBackEnd() {
    const [userList, setUserList] = useState([]);
    const [user, setUser] = useState();
    const [reqSt, setReqSt] = useState('');
    const [userid, setUserid] = useState('');

    //fetch
      function getAllUser_fetch(){
              fetch("/api/getAllUser")
              .then(response => response.json())
              .then(data => {
                setUserList(data);
                setReqSt('Fetch');
                console.log(JSON.stringify(data));
              })
              .catch(error => console.error(error));
      }
      function getAllUser_axios(){
        Axios.get("/api/getAllUser")
              .then(response => {
                setUserList(response.data);
                setReqSt('Axios');
                console.log(JSON.stringify(response.data));
              }) .catch(error => console.error(error));
      }

      function getUserById(){
        const param = {
          searchId: userid
        };
        
        Axios.post("/api/getUserById", param)
            .then(result => {
              const r_data = result.data;
              console.log(r_data);
                if(r_data == null || r_data == ''){
                  setUser('데이터 없음');
                } else {
                  setUser(JSON.parse(JSON.stringify(r_data)));
                  console.log(JSON.stringify(r_data));
                }
            })
            .catch(error => console.error(error));
      }

    return (
        <>
        <h2>
              백엔드 서버로부터 request 및 response 출력하는 페이지  입니다.
        </h2>
        <div>
        <p>1. 파라미터 없이 단순 요청</p>
        <button onClick={getAllUser_fetch}>SEARCH USER(Fetch)</button>
        <button onClick={getAllUser_axios}>SEARCH USER(Axios)</button>
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
        </div>
        <div>
        <p>2. 파라미터 포함 요청(Axios)</p>
        <input type="text" value={userid} onChange={(e) => setUserid(e.target.value)}/>
        <button onClick={getUserById}>Search User</button>
        <p>
              백엔드 서버로부터 받은 유저:{typeof user === 'object' ? JSON.stringify(user) : user} 
              {/* 
              user가 존재하고(null이나 undefined가 아님), 타입이 object일 때만 리스트를 렌더링합니다.
              따라서 "데이터 없음" 문자열이 들어있을 때는 리스트가 보이지 않고, 텍스트만 출력됩니다.*/}
              {user && typeof user === 'object' ?
                <ul>
                  <li>
                    <div>{user.id}</div>
                    <div>{user.name}</div>
                    <div>{user.age}</div>
                  </li>
                </ul> : null
              }
            </p>
        </div>
        </>
    )
}