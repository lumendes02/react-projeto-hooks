import P from 'prop-types';
import React, { createContext, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import './App.css';

// action.js
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
}

// data.js
export const globalState = {
  title: 'O titulos que contexto',
  body: 'body do contexto',
  counter: 0,
}

// reducer.js
export const reducer = (state,action) => {
  switch(action.type) {
    case actions.CHANGE_TITLE: {
      console.log('muda titulo')
      return {...state, title: action.payload}
    }
    default:
      console.log();
  }
  return {...state}
}

// AppContext
export const Context = createContext();
export const AppContext = ({children}) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({type: actions.CHANGE_TITLE, payload})
  }

  return <Context.Provider value={{state, changeTitle}}>{children}</Context.Provider>
};

AppContext.propTypes = {
  children: P.node,
};

// h1/index.jsx
export const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef();

  return ( 
    <>
      <h1 onClick={()=> context.changeTitle(inputRef.current.value)}>
        {context.state.title}
      </h1>
      <input type='text' ref={inputRef}></input>
    </>
  )
}

// app.jsx
function App() {
  return (
    <AppContext>
      <div>
        <H1></H1>
      </div>
    </AppContext>
  )
}

export default App;
