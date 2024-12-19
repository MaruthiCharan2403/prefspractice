import React, { useState } from 'react'
import axios from 'axios';

export default function Add() {
    const [title,settitle] = useState("");
    const [artist,setartist] = useState("");
    const [band,setband] = useState("");
    const [show,setshow] = useState(false);
    const handlesubmit = async(e) =>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/add',{title,artist,band});
            if(response.status===200){
                setshow(true);
            }
            settitle("");
            setband("");
            setartist("");
        }
        catch(e){
            console.log(e);
        }
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <div>
                <label>Title</label>
                <input
                type='text'
                name='title'
                value={title}
                onChange={(e)=>{settitle(e.target.value)}}
                />
            </div>
            <div>
                <label>Artist</label>
                <input
                type='text'
                name='artist'
                value={artist}
                onChange={(e)=>{setartist(e.target.value)}}
                />
            </div>
            <div>
                <label>Band</label>
                <input
                type='text'
                name='band'
                value={band}
                onChange={(e)=>{setband(e.target.value)}}
                />
            </div>
            <button type='submit'>Submit</button>
            {show && <p>User registered successfully</p>}
        </form>
    </div>
  )
}
