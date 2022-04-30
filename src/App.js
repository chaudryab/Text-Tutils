import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

let toggleMode = ()=>{
  if (mode === 'light')
  {
    setMode('dark');
    document.body.style.backgroundColor = 'black';
    showAlert('dark mode activate succesfully','success');
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert('light mode activate succesfully','success');
  }
}

let showAlert = (message,type)=>{
  setAlert({
    msg: message,
    type: type
  })

  setTimeout(() => {
    setAlert(null);
  }, 1500);
}

const[mode,setMode] = useState('light');
const[alert,setAlert] = useState(null);
  return (
    <>
      <Router>
        <Navbar title='Textutils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
              <Route path="/about" 
              element={<About mode={mode} />}>
              </Route>
              <Route path="/" 
              element={<TextForm heading='Enter your text here to analyze' showAlert={showAlert} mode={mode}/>}>
              </Route>
            </Routes>
        </div>
      </Router>
   </>
  );
}

export default App;
