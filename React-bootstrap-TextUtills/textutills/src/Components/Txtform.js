import React, {useState} from 'react'
export default function Txtform(props) {
    function handlerOnChange(event){
        setText(event.target.value)
        
    }
    function handlerUpper(){
        let newTxt = text.toUpperCase();
        setText(newTxt)
        newTxt.length>0?props.showAlert("Converted to UpperCase ","success"):props.showAlert(" Text Area is Empty ","warning")
    }
    function handlerLower(){
        let newTxt=text.toLowerCase();
        setText(newTxt)
        console.log(newTxt)
        newTxt.length>0?props.showAlert("Converted to LowerCase ","success"):props.showAlert(" Text Area is Empty ","warning")
    }
    function handlerClear(){
        setText("")
        props.showAlert("Text Area Has been Cleared ","success")
    }
    function handlerCopy(){
        navigator.clipboard.writeText(text);
        text.length>0?props.showAlert("Text Has Been Copyed ","success"):props.showAlert(" Text Area is Empty ","warning")
    }
    function handlerSpace(){
        let newTxt=text.split(/[ ]+/);
        setText(newTxt.join(" "))
    }
        const [text,setText]=useState('');
  return (
<>
     <div className='container 'style={{color :props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <textarea className='form-control' rows={8} value={text} onChange={handlerOnChange} style={{backgroundColor:props.mode==='dark'?'#042743':'white',color :props.mode==='dark'?'white':'black'}}></textarea>
        <br/>
        <button className="btn btn-primary" id='bn'onClick={handlerUpper}>uppercase</button> &nbsp;
        <button className="btn btn-primary" id='bn'onClick={handlerLower}>Lowercase</button>
        <button className="btn mx-2 btn-primary" id='bn'onClick={handlerClear}>Clear</button>
        <button className="btn mx-2 btn-primary" id='bn'onClick={handlerCopy}>Copy</button>
        <button className="mx-2 btn btn-primary" id='bn'onClick={handlerSpace}>Remove Extra Space</button>
    </div>
    <div className='container my-3' style={{color :props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>Words {text.split(" ").length-1} and Character {text.length}</p>
        <p>Minutes To Read {(0.008*text.split("").length).toFixed(2)}</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter text in above text area to show'}</p>
    </div>
</>
  )
}
