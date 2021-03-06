import React,  {useState, useEffect} from 'react';
import { TabContent } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import "../css/Detail.scss";

import {CSSTransition} from 'react-transition-group'; // ES6


function Detail(p){

        {/*  24  
        🚀UI만들기

        1. UI 보이고/안보이고 상태... state로 저장

        2. if문으로 state가 true일때 보여줌

        3. setState값 변경하는 함수 설정 (ex.  button ,  setTimeout)

        */}

    {/*  24 -1 */}
    const [alert, setAlert] = useState(true);

    const [tab, settab] = useState(0);

    const [turn, setturn] = useState(false);


    {/*  24-3 */}
    useEffect(() => {
      let timeout = setTimeout(() => {
          setAlert(false)          
      }, 2000);
    }, [])
    
    var history = useHistory();

    let {id} = useParams();         {/*  19 */}

    {/* 21 connect address with id in Data.js
    , find() */}
    let findItem = p.shoes.find(function(a){
        return a.id ==id
    })
    
    return(
        <div className="container">        
            <div>
                {/*  24-2*/}
                {
                    alert === true
                    ? (
                        <div className="my-alert2">
                        <p>out of order soon (hide in 2sec)</p>
                        </div>
                    )
                    : null
                }

                {/*  24-3  */}
                <button onClick={()=>{ setAlert(true) }}>show</button>
                <button onClick={()=>{ setAlert(false) }}>hide</button>    
            </div>        
            
            <div className="row ">
                <div className="col-md-6">         
         
                    <img src={"https://codingapple1.github.io/shop/shoes"+id+".jpg"} width="100%" />
                </div>
                <div className="col-md-6 mt-4 ">
                    <h4 className="pt-5 lightcoral">{findItem.title}</h4>        {/*  20, 21 */}
                    <p>{findItem.content}</p>
                    <p>{findItem.price}$</p>

                    <Info inventory={p.inventory} id={id}/>        {/*  19 */}

                    <button className="btn btn-danger" onClick={()=>{
                       
                    }}>order</button> 
                    <button className="btn btn-danger" onclick={()=>{
                        history.goBack()
                    }}>back</button> 
                </div>
            </div>

            <div>
                    <button onClick={()=>{ setturn(false); settab(0); }}> show 0</button>
                    <button onClick={()=>{ setturn(false); settab(1);  }}> show 1</button>
                    <button onClick={()=>{setturn(false); settab(2);  }}> show 2</button>
            </div>


            <CSSTransition in={turn} className='wow' timeout={500}>
            
                <Tabcontent   tab={tab}   setturn={setturn}/>
          </CSSTransition>
         </div> 
    )
}

function Tabcontent(p) {
useEffect(() => {        
       p.setturn(true);
}, [])

    if (p.tab=== 0) {
        return(
            <div> 0 datas </div> )
    } else if(p.tab=== 1){
        return(
         <div> 1 datas </div>)
    }else {
        return(
        <div> 2 datas </div>)
   }
}


function Info(p){
    return(
        <p> inventory : {p.inventory[p.id]} </p>
    )
}

export default Detail