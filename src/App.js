import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routers/Routers';
import { createContext, useState } from 'react';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const GlobalInfo =createContext()
function App() {
  const[themeValue,setThemeValue]=useState('')
  return (
    <div className="App">
        <ToastContainer />
      <BrowserRouter>
        <GlobalInfo.Provider value={{ themeValue, setThemeValue }}>
          <Routers />

        </GlobalInfo.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
