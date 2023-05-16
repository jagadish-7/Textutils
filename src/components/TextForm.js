import React,{useState} from 'react'
import '../App.css'

export default function TextForm(props) {
  const [text, setText] = useState('');




  // Converting to uppercase
  const convertIntoUpper = ()=>{
    let newText = text.toUpperCase()
    setText(newText);
    props.showAlert("Converted to UpperCase", "success")
  }


  // Converting to uppercase
  const convertIntoLower = ()=>{
      let newText = text.toLowerCase()
      setText(newText);
    props.showAlert("Converted to Lowercase", "success")

  }



  //Clearing The text

  const clearText = ()=>{
    setText('')
    props.showAlert("Text Cleared!", "success")

  }



  



  const handleOnChange = (event)=>{
      setText(event.target.value)
  }

  


  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>

    <h1 className='text-center my-3'>Simple Text Utilizer</h1>
    <div className="text-area">
            <textarea className="form-control myTextarea" value={text} onChange={handleOnChange} placeholder="Enter your text here..." id="floatingTextarea2" rows="10"  style={{color:props.mode==='dark'?'white':'black', backgroundColor:props.mode === 'dark'?'black':'white'}}></textarea>
    </div>
    <button className="btn btn-primary my-4" onClick={convertIntoLower}>Convert into LowerCase</button>
    <button className="btn btn-secondary my-4 mx-2" onClick={convertIntoUpper} >Convert into Uppercase</button>
    <button className="btn btn-danger my-4" onClick={clearText}>Clear Text</button>
    <div className="summary">
    <h2>Information About your text</h2>
    <p><b>Words:</b>  {text.split(' ').length}</p>
    <p><b>Characters:</b> {text.split('. ').length}</p>
    <p><b>Sentences:</b> {text.length}</p>
    <p><b>Reading Time:</b> {0.008*text.split(' ').length} minutes</p>


    <h2 className='my-3'>Preview</h2>
    <p className='preview-text'>{text.length>0?text:'Enter the text above to get the preview here...'}</p>




    </div>
    </div>

    </>
  )
}
