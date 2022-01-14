
import './App.css';

import React from "react";
import Counter from "./Counter"


// When +/- is clicked, the value from input field should be added/substracted 
// to the current Count and printed in the screen
// Ex: Count starts at 0. I write 3 in the input file and click +, then counter updates to 3 (0+3).
// Then I write 2 in the input file ad click -, the counter updates to 1 (3-2)
export default function App() {
  
  return (
    <div className="App">
      <h2>Implement increment/decrement of count</h2>
      <Counter/>
    </div>
  );
}
