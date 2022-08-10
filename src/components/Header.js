import React from 'react';

function Header({ darkMode }) {
    function onDarkModeClick() {
     handleDarkModeClick();
}
    return (
    <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {darkMode ? "Dark" : "Light"} Mode
        </button>
    </header>
    );
    
}

export default Header;