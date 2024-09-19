import React, { useState, useEffect } from 'react';
import Form from './Form';
import Table from './Table';
import './App.css'

console.log("made by kaara and syn")
console.log("eggbug forever")

const App = () => {
  const [formData, setFormData] = useState([]);

  // Load
  useEffect(() => {
    const data = localStorage.getItem('formData');
    if (data) {
      setFormData(JSON.parse(data)); 
    }
  }, []);

  // Store
  const handleFormSubmit = (data) => {
    if ( data.bug === "eggbug" ) { console.log("you fucking monster");}
    const updatedFormData = [data, ...formData];
    setFormData(updatedFormData);

    // Save
    localStorage.setItem('formData', JSON.stringify(updatedFormData));
  };

  return (
  
    <div class = "page">
      <h1>I Don’t Remember When I Started Killing Bugs Again</h1>
      <div class="rules">

      <p>a game for one</p>

      <p>keep a log of every insect you kill</p>
        
      <p>the game ends when you stop killing insects</p>
      </div>

      <Form onFormSubmit={handleFormSubmit} />
      <Table data={formData} />
    </div>
  );
};

export default App;
