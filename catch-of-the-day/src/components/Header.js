import React from 'react';

const Header = props => (
    <div className="top">
        <header>
            <h1>Catch 
                <span className="ofThe">
                    <span className="of">of</span> 
                    <span className="the">the</span> 
                </span>
                Day </h1>
            <h3 className="tagline"> 
                <span>{props.tagline}</span>
            </h3>
        </header>
   </div>
);

export default Header;
