import React from 'react';
import './App.css'; 

function Header() {
    return (
      <header>
        <img
          src='data:image/jpeg;base64,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'
          alt='Problem?'
        />
        <p>Meme Generator</p>
      </header>
    );
  }
  
export default Header;