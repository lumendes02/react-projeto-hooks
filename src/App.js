import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import { AppContext } from './contexts/AppContext';
import { Div } from './components/Div';

function App() {
  return (
    <AppContext>
      <Div></Div>
    </AppContext>
  )
}

export default App;
