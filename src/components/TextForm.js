import React, {useState} from 'react'

export default function TextForm(props) {

    // Convert in Uppercase
    const hadleUpClick = ()=>{
        let upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert('text convert in uppercase successfully','success');
    }

    // Convert in Lowercase
    const hadleLoClick = ()=>{
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert('text convert in lower successfully','success');
    }

    // Reverse Text
    const hadleRevClick = ()=>{
        let splitText = text.split(" ");
        let reverseText = splitText.reverse();
        let joinText = reverseText.join(" ")
        setText(joinText);
        props.showAlert('text reverse successfully','success');
    }

    // Remove Extra Spaces
    const hadleExtraSpaceClick = ()=>{
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText)
        props.showAlert('extra spaces remove successfully','success');
        }

            
    // Copy Text
    let hadleCopyClick= ()=>{
        var copyText = text;
        navigator.clipboard.writeText(copyText);
        props.showAlert('text copy successfully','success');
      }


    // Clear Text
    const hadleclearClick = ()=>{
        let text = ('');
        setText(text);
        props.showAlert('text clear successfully','success');
    }
    
    // Edit Textarea
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    // Text State
    const[text,setText] = useState("");
    
  return (
      <>
    <div className="container mb-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h1 className="my-3">{props.heading}</h1>
        <textarea className="form-control " value={text} onChange={ handleOnChange } style={{backgroundColor: props.mode==='light'?'white':'grey'}} id="mybox" rows="8"></textarea>
        <button className="btn btn-primary m-3" onClick={ hadleUpClick }>Contert To UpperCase</button>
        <button className="btn btn-primary m-3" onClick={ hadleLoClick }>Convert To LowerCase</button>
        <button className="btn btn-primary m-3" onClick={ hadleExtraSpaceClick }>Remove Extra Sapce</button>
        <button className="btn btn-primary m-3" onClick={ hadleRevClick }>Reverse Text</button>
        <button className="btn btn-primary m-3" onClick={ hadleCopyClick }>Copy Text</button>
        <button className="btn btn-primary m-3" onClick={ hadleclearClick }>Clear Text</button>
    </div>
    <div className="container mb-3" style={{color: props.mode==='light'?'black':'white'}}>
    <h2>Your Text Summary</h2>
    <p>{text === ''?0:text.split(" ").length} words and {text.length} characters.</p>
    <p>{0.008 * (text === ''?0:text.split(" ").length)} minutes to read</p>
    <h2 className="mt-3">Preview</h2>
    <p>{text.length>0?text:'Enter somthing in the above textbox to preview it here'}</p>
    </div>
    </>
  )
}
