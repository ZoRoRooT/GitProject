import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import Txtform from "./Components/Txtform";

function App() {
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  function toggleMode(){  
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode hass been enabled","success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode hass been enabled","success")
    }
  }
  return (
    <>
      <Navbar title="TextUtills" about="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
      <Txtform heading="Enter Text"showAlert={showAlert} mode={mode} />
    </>
  );
}

export default App;
