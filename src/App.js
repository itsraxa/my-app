import './App.css';
import React, { useState } from 'react'
import Navbar from'./components/Navbar'
import About from'./components/About'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);


const showAlert = (message,type)=>{
        setAlert({
          msg : message,
          type : type
        })
        setTimeout(() => {
          setAlert(null)
        }, 1500);
}


// const bodyColorRemove = ()=>{
//   document.body.classList.remove('bg-warning')
//   document.body.classList.remove('bg-primary')
//   document.body.classList.remove('bg-danger')
//   document.body.classList.remove('bg-dark')
//   document.body.classList.remove('bg-light')
//   document.body.classList.remove('bg-success')
// }
const toggleMode = (cls)=>{
  // bodyColorRemove();
  // console.log(cls);
  // document.body.classList.add('bg-'+cls);
  if (mode==='light') {
    setMode('dark')
    document.body.style.backgroundColor ='grey';
    showAlert("Dark mode has been Enabled","success")
    // setInterval(() => {
    //   document.title = "Text-utills App"
    // }, 1000);
    // setInterval(() => {
    //   document.title = "Install Text-utills"
    // }, 700);
  }else{
    setMode('light')
    document.body.style.backgroundColor ='white';
    showAlert("Light mode has been Enabled","success")
  }
}
  return (
   <>
    <Router>
    <Navbar title="Ali Logo" mode={mode} toggleMode={toggleMode} />
    {/* <Navbar /> */}
    <Alert alert={alert} />
        <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">
            <div className="container my-3">
            <TextForm showAlert={showAlert} heading="Enter Text to Analyze Below" mode={mode} />
            </div>
          </Route>
        </Switch>
    </Router>
   </>

  );
}

export default App;
