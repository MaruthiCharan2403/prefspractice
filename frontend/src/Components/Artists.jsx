import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'

export default function Artists() {
    const [artist,setartist] = useState(null);
    const [message,setmessage] = useState(false);
    useEffect(()=>{
        const fetchartists = async()=>{
            try{
                const response = await axios.get('http://localhost:3000/all');
                console.log(response.data);
                setartist(response.data);
            }
            catch(e){
                setmessage(true);
                console.log("Error in fetching data")
            }
        }
        fetchartists();
    },[])

  return (
    <>
    <div>Artists</div>
    {artist?(
        <table>
        <tr>
            <th>TITLE</th>
            <th>Artist</th>
            <th>Band</th>
        </tr>
        {artist.map((artists,index)=>(
            <tr key={index}>
                <td>{artists.title}</td>
                <td>{artists.artist}</td>
                <td>{artists.band}</td>
            </tr>
        ))}
    </table>
    ):(
        <p>Loading</p>
    )}
    
    </>
    
  )
}
