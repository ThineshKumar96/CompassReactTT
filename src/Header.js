import React, { useState } from 'react';
import Desktop from './Desktop/Desktop';
import AddParty from './AddParty/AddParty.js';
import PartySummaryPage from './PartySummary/PartySummary.js';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.css';
function Header() {
    const [showDesktop, setShowDesktop] = useState(false);
    const [showParty, setShowParty] = useState(false);
    const [PartySummary, setPartySummary] = useState(false);
    const toggleDesktop = () => {
        setShowDesktop(!showDesktop);
    };
    const toggleAddParty = () => {
        setShowParty(!showParty);
    };
    const togglePartySummary = () => {
        setPartySummary(true);
    };

    return (

        <div>
            <button className='DesktopButton' onClick={toggleDesktop}>Desktop</button>
            {showDesktop && <Desktop />}
            <button className='PartyButton' onClick={toggleAddParty}>Addparty</button>
            {showParty && <AddParty onPartyCreated={togglePartySummary} />}
            <input className='Search' type="text" name="search"></input>
            <button class="btn btn-secondary">Search</button>
            <div>
                {PartySummary ? (<div className="Header"> <PartySummaryPage /></div>
                ) : <div>(
                    <AddParty />
                )
                </div>}
                </div>
     
        </div>

    );
}


export default Header;