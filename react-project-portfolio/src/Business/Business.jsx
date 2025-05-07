import React from 'react';

function Business(props) {
    return (
        <div className="business-container">
            <img src={props.bussinesObject.imageSrc}/>
            <div className="business">
                <div className="left">
                    <h2>{props.bussinesObject.name}</h2>
                    <p>{props.bussinesObject.address}</p>
                    <p>{props.bussinesObject.city}</p>
                    <p>{props.bussinesObject.state} {props.bussinesObject.zipCode}</p>
                </div>
                <div className="right">
                    <p className="yellow uppercase">{props.bussinesObject.category}</p>
                    <p className="yellow">{props.bussinesObject.rating} stars</p>
                    <p>{props.bussinesObject.reviewCount} reviews</p>
                </div>
            </div>
        </div>
    );
}

export default Business;