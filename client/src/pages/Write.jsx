import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
    const [value, setValue] = useState('')
    return (
        <div className="add">
            <div className="content">
                <input type="text" name="" id="" placeholder='title' />
                <div className="editContainer">
                    <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />;
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visibility: </b> Public
                    </span>
                    <input style={{ display: "none" }} type="file" name="" id="file" />
                    <label className='file' htmlFor="file">Upload Image</label>
                    <div className="buttons">
                        <button>Save as a draft</button>
                        <button>Update</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>
                    <input type="radio" name="cat" value="art" id="art" />
                    <label htmlFor="art">art</label>
                    <input type="radio" name="cat" value="science" id="art" />
                    <label htmlFor="science">science</label>
                    <input type="radio" name="cat" value="technology" id="art" />
                    <label htmlFor="technology">technology</label>
                    <input type="radio" name="cat" value="cinema" id="art" />
                    <label htmlFor="cinema">cinema</label>
                    <input type="radio" name="cat" value="design" id="art" />
                    <label htmlFor="design">design</label>
                    <input type="radio" name="cat" value="food" id="art" />
                    <label htmlFor="food">food</label>
                </div>
            </div>


        </div>
    )
}

export default Write
