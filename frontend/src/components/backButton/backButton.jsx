import React from 'react'
import './backButton.css'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
    const myNavigate = useNavigate();
    const handleGeriClick = () => {
        myNavigate(-1);
    };

    return (
        <div className='backButton'>
            <i onClick={handleGeriClick} className="fa-solid fa-arrow-left"></i>
        </div>
    )
}

export default BackButton;
