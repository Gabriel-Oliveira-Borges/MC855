import React from "react";
import "./Cronogram.css";

function Cronogram({day, morning, afternoon}) {
    return (
        <div className="cronogram">
            <p className="day">{day}</p>
            <div className="period">
                <p className="time">MANHÃ</p>
                <div className="activities" dangerouslySetInnerHTML={{__html: morning}} />
            </div>
            <div className="period">
                <p className="time">TARDE</p>
                <div className="activities" dangerouslySetInnerHTML={{__html: afternoon}} />
            </div>
        </div>
    )
}

export default Cronogram;