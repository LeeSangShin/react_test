import Axios from 'axios';
import { useState, useEffect } from 'react';
import { resolvePath } from 'react-router-dom';

export default function DataInsert() {

    const submitAction = (formData) => {
        const param = {
            id : formData.get('id'),
            name : formData.get('name'),
            age : formData.get('age')
        }
        Axios.post("/api/createUser",param)
        .then(response => {
            console.log(response.data);
            setCheckUserIdResult('');
            if(response.data){
                alert("사용자 생성완료됫습니다");
            } else {
                alert("사용자 생성 실패");
            }
        })
        .catch(error => console.error(error));
    }
    const [checkUserIdResult, setCheckUserIdResult] = useState('');
    const checkUserId = (e) => {
        console.log(e.target.value);
        var p_id = e.target.value;
        setCheckUserIdResult('');
        if(p_id == null || p_id == ''){
            return;
        }
        const idregex = /^[a-zA-Z0-9]{4,12}$/;
        console.log(idregex.test(p_id));
        if(!idregex.test(p_id)){
            setCheckUserIdResult('ID는 영문, 숫자 포함 최소 8자리 최대 12자리까지만 가능합니다');
            return;
        }

        Axios.post("/api/checkUserId",{id : p_id})
        .then(response => {
            var result = response.data;
            if(result == 'Y'){
                setCheckUserIdResult('사용가능한 ID 입니다');
            } else {
                setCheckUserIdResult('중복된 ID 입니다 확인해주세요');
            }
        })
        .catch(error => console.error(error));
    }

    return (
        <>
        <h2>Data Insert page 입니다.</h2>
        <p>form을 생성하여 data를 취합 및 param화 시켜서 insert req를 진행합니다</p>
        <form action={submitAction}>
            <div>
            <label>ID</label>
            <input type="text" name="id" onBlur={checkUserId} />
            <p>{checkUserIdResult}</p>
            </div>
            <div>
            <label>이름</label>
            <input type="text" name="name" />
            </div>
            <div>
            <label>나이</label>
            <input type="number" name="age" />
            </div>
            <input type='submit' value="submit"/>
        </form>
        </>
    );
}
