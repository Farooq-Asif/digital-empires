import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routers/Routers';
import { createContext, useState } from 'react';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "react-loading-skeleton/dist/skeleton.css"; 
import ReactGA from 'react-ga';
ReactGA.initialize('G-LFM7D3LQ03');


export const GlobalInfo =createContext()
function App() {
 
  const[ isCollapsed, setIsCollapsed  ]=useState(false)
  const[valueTheme,setThemeValue]=useState('light')
  return (
    <div className="App">
        <ToastContainer />
      <BrowserRouter>
        <GlobalInfo.Provider value={{ isCollapsed, setIsCollapsed,valueTheme,setThemeValue}}>
          <Routers />

        </GlobalInfo.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
