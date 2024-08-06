import React from 'react';

const Header = ({ onSelectForm }) => {
  return (
    <header>
      <center>
      <h1>Electricity Bill Management</h1><br></br>
      </center>
      <nav>
        <button onClick={() => onSelectForm('showAll')}>Show All Records</button>
        <button onClick={() => onSelectForm('upload')}>Upload Record</button>
        <button onClick={() => onSelectForm('getOne')}>Get One Record</button>
        <button onClick={() => onSelectForm('delete')}>Delete Record</button>
        <button onClick={() => onSelectForm('update')}>Update Record</button>
      </nav>
    </header>
  );
};

export default Header;
