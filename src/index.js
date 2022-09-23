import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [text,setText]=useState('');

  return (
    <div style={styles.container}>
      <p style={styles.title}>Task: accessibility of the button</p>
      <input id="in" type="text" style={styles.input} placeholder="Text here"
       value={text} onChange={(e) => setText(e.target.value)}/>
      <br/>
      <br/>
     <input type="submit" disabled={text?false:true}/>
    </div>
  );
}

const styles = {
  container: {
    padding: 15,
  },
  title: {
    fontWeight: 'bold',
  },
  paragraph: {},
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);
