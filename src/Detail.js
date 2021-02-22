import React from 'react';
import { useHistory, useParams } from 'react-router-dom';


function Detail(p){

    const history = useHistory();
    let {id} = useParams();

    return(
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
                <h4 className="pt-5">{p.shoes[id].title}</h4>        {/*  20 */}
                <p>{p.shoes[id].content}</p>
                <p>{p.shoes[id].price}$</p>
                <button className="btn btn-danger">order</button> 
                <button className="btn btn-danger" onclick={()=>{
                    history.goBack()
                }}>back</button> 
            </div>
            </div>
         </div> 
    )
}

export default Detail