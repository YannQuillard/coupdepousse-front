import React, { useState } from "react";
import './Young_Landing.css';

interface FilterProps {
    filter_str: string
}

function ButtonFilter(props: FilterProps) { 
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
      };


    return (
        <div
        className={isActive? "filter_button_deactivate" : "filter_button_activate"}
        onClick={toggleClass}
        >
            <div className="filterContainer">
                <img 
                className={isActive? "crossFilter" : "crossFilter crossActivate"}
                src="https://svgshare.com/i/fYx.svg"/>
                <p className="filter_type">
                    {props.filter_str}
                </p>
            </div>
        </div>
    )

}

export default ButtonFilter