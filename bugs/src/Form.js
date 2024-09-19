import React, { useState } from "react";

const Form = ({ onFormSubmit }) => {
    const [date, setDate] = useState('');
    const [bug, setBug] = useState('');
    const [where, setWhere] = useState('');
    const [why, setWhy] = useState('');
    const [thoughts, setThoughts] = useState('');
    

    const handleSubmit = (e) => {
      e.preventDefault();
      if ( !date || !bug || !where || !why || !thoughts ) return;
      onFormSubmit({ date, bug, where, why, thoughts}); //clear the forms
      setDate('');
      setBug('');
      setWhere('');
      setWhy('');
      setThoughts('');
    };

    return (
      <form onSubmit={handleSubmit}>
        

        <div>
          <label> </label>
          <input class="qdate"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label>describe the insect you killed: </label>
          <input class="q1"
            type="text"
            value={bug}
            onChange={(e) => setBug(e.target.value)}
            required
          />
        </div>
        <div>
          <label>where did you kill the insect? </label>
          <input  class = "q2"
            type="text"
            value={where}
            onChange={(e) => setWhere(e.target.value)}
            required
          />
        </div>
        <div>
          <label>why did you kill the insect? </label>
          <input class = "q3"
            type="text"
            value={why}
            onChange={(e) => setWhy(e.target.value)}
            required
          />
           <div>
          <label>what were you thinking? </label>
          <input class = "q4"
            type="text"
            value={thoughts}
            onChange={(e) => setThoughts(e.target.value)}
            required
          />
        </div>
        </div>
        <button type="submit" class= "button">Add</button>
      </form>
    );
  };
  
  export default Form;
