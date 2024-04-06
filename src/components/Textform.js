import { fireEvent } from '@testing-library/react';
import React, {useState} from 'react';

export default function Textform(props) {
    const [text, setText] = useState('');
    function change(event) {
        setText(event.target.value)
    }

    function textUp() {
        setText(text.toUpperCase());
    }

    function textDown() {
        setText(text.toLowerCase());
    }

    function textClear() {
        setText("");
    }

    function copy() {
        navigator.clipboard.writeText(text);
        var copyT = document.querySelector("#mybox");
        copyT.select();
    }

    const dark = {
        color: "#f7f7f7",
    }
    return (
        <>
            <div className="mb-3" style={dark}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="mybox" rows="10" onChange={change} value={text}></textarea>
                <p className="pt-1">{text.split(" ").length} Words and {text.length} charecters.</p>
                <button className="btn btn-primary m-1 mt-2" onClick={textUp}>Convert to Uppercase <i class="ri-arrow-up-fill"></i></button>
                <button className="btn btn-primary m-1 mt-2" onClick={textDown}>Convert to Lowercase <i class="ri-arrow-down-fill"></i></button>
                <button className="btn btn-primary m-1 mt-2" onClick={textClear}>Clear Text <i class="ri-close-line"></i></button>
                <button className="btn btn-primary m-1 mt-2"  onClick={copy}>Copy to Clipboard <i class="ri-file-copy-fill"></i></button>
            </div>

            <div className="container mt-5" style={dark}>
                <h1>Your Text Report</h1>
                <p>It will take a avarage person {0.005 * text.split(" ").length} minuts to read this text!</p>
            </div>
        </>
    )
}
