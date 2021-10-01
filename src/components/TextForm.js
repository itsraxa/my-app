import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('Enter Text Here');
    const handelUpClick = ()=>{
       let  newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Capitalized successfully" ,"success")
    }
    const handelLowClick = ()=>{
        let  newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase successfully" ,"success")
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("Text Copied to clipboard successfully" ,"success")
    }
    const handleClear = ()=>{
        setText('');
        props.showAlert("Text Area Cleared successfully" ,"success")
    }
    const handelExtraSpaces = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra spaces Removed from Text successfully" ,"success")
    }

    const handelOnChange = (event)=>{
        setText(event.target.value);
    }
    return (
        <>
        <div className="container" style={{color :props.mode==='light'?'black':'white'}}>

            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor :props.mode==='light'?'white':'grey',color :props.mode==='light'?'black':'white'}} id="text-box" rows="8"></textarea>

            <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handelUpClick} >Convert to UpperCase</button>
            <button  disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handelLowClick} >Convert to LowerCase</button>
            <button  disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleCopy} >Copy Text</button>
            <button  disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleClear} >Clear Text</button>
            <button  disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handelExtraSpaces} >Remove Extra Space</button>
            </div>
            <div className="container">
                <h2>Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Charachters</p>
                <p>{0.08 * (text.split(" ").filter((element)=>{return element.length!==0}).length)} Minutes to Read</p>
            </div>
            <div className="container">
                <h2>Preview</h2>
                <p>{text===''?"Enter something in textarea above to preview it!":text}</p>
            </div>
        </div>
</>
    )
}
