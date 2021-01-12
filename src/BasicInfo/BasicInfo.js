import React from 'react';
import './BasicInfo.css'

const basicInfo = (props) => {
    return (
        <div className="BasicInfo">
            <h2>Personal Information</h2>
                <p>Name: {props.name}</p>
                <p>Number: {props.number}</p>
                <p>DOB: {props.dOB}</p>
                <p>Position: {props.position}</p>
        </div>
    )
}

export default basicInfo