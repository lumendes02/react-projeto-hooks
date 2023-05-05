import P from 'prop-types';
import React, { createContext, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import './styles.css';
import { PostsProvider } from '../../contexts/PostsProvider';
import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../contexts/CounterProvider';

// app.jsx
function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div>
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  )
}

export default App;
