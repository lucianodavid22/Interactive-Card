import React, { useEffect } from "react";
import {useSelector } from "react-redux";
import "./CardFront.css";


export default function CardFront() {
    const estado = useSelector(state => state.cardReducer);

    useEffect(() => {
        console.log(estado);
    }, [estado]);

    return(
        <div className="card-front-container">
            <div className="circles">
                <div className="circle1"></div>
                <div className="circle2"></div>
            </div>
            <div className="data">
                <h1>0000 0000 0000 0000</h1>
                <div className="name-year">
                    <h2>{ estado.name === undefined || estado.name === "" ? "NAME" : estado.name }</h2>
                    <h2>MM/YY</h2>
                </div>
            </div>
        </div>
    );
}