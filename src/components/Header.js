import React from 'react'
import {useNavigate} from 'react-router-dom'

const Header = () => {
    let navigate = useNavigate();

    return (<div className="ui fixed menu">
        <div className ="ui container">
            <h1 class="ui center aligned header">Ask 4 Angela</h1>
            <div class="ui right secondary menu">
                <a class="ui item" onClick={() => navigate('/')}><i aria-hidden="true" class="home icon" /></a>
                <a class="ui item" onClick={() => navigate('/about')}><i aria-hidden="true" class="question circle outline icon" /></a>
                <a class="ui item" onClick={() => navigate('/restaurant-list')}><i aria-hidden="true" class="food icon" /></a>
            </div>       
        </div>
    </div>
    );
}

export default Header