import React, {useState} from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpClick=()=>{
        //console.log('Handle on Click' + text);
        let newtext = text.toUpperCase()    ;
        setText(newtext );
    }
    const handleLlowerClick=()=>{
        //console.log('Handle on Click' + text);
        let newtext = text.toLocaleLowerCase()    ;
        setText(newtext );
    }

    const handlePretifyClick=()=>{
        //console.log('Handle on Click' + text);
        // let newtext = text.replace("}",/\r/+'} ');
        let newtext = text.replace("}",/\r\n/);
        setText(newtext);
    }

    const handleMinifyClick=()=>{
        //console.log('Handle on Click' + text);
        let newtext = text.replace(/\n/g, "").replace(/\n/g, "");
        setText(newtext );
    }

    const handleOnChange=(event)=>{
        //console.log('Handle on Change');
        setText(event.target.value);
    }

    const handleClear=()=>{
        //console.log('Handle on Click' + text);
        let newtext = '';
        setText(newtext );
    }


    return (
        <>
        <div className="container my-3">
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">{props.heading}</label>
                <textarea placeholder ="Enter text here.." onChange={handleOnChange} className="form-control" id="myBox" rows="8" value={text}></textarea>
            </div>
            <button className="btn btn-outline-success" onClick={handleUpClick}>Convter to Uppercase</button>
            <button className="btn btn-outline-success mx-2" onClick={handleLlowerClick}>Convter to LowerCase</button>
            <button className="btn btn-outline-success mx-2" onClick={handleMinifyClick}>Minify CSS</button>
            <button className="btn btn-outline-success mx-2" onClick={handlePretifyClick}>Clear Text</button>
        </div>
        <div className="container my-3">
        <h1 className="">Your text Summary</h1>
        <p className="">{text.split(" ").length} words and {text.length} characters</p>
        <p className="">{0.008 * text.split(" ").length} minutes read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
        </>
    )
}
