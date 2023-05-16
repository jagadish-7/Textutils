
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { Alert } from './components/Alert';

import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert("Dark Mode Enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Dark Mode disabled", "success")


    }
  }



  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }





  const changeColorPallete = () => {
    var x = document.getElementById("myColor").value;
    document.body.style.backgroundColor = x;
    // let uncheck = document.getElementById("myCheckbox");
    // uncheck.type =
  }


  return (
    <>




      <Router>
          <Navbar mode={mode} toggleMode={toggleMode} changeColor={changeColorPallete} />
          <Alert alert={alert} />


          <Routes>
              <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} />}></Route>
              <Route exact path="/about" element={<About mode={mode} />} ></Route>
              {/* <Route exact path='/' element={}></Route>
            <Route exact path='/about' element={}></Route> */}
          </Routes>
      </Router>






    </>
  );
}



export default App;
