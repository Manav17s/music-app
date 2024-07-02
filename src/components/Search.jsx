import { useRef } from "react";

export const Search = ({fn}) =>{  
   const artist = useRef();// fn or props            
   return (
     <>
   <label>Artist name</label>
   <input ref ={artist} type = 'text' className="form-control" placeholder = "Search artist-wise song"/>
   <button className="btn btn-danger" onClick={ () =>{
      fn(artist.current.value);
   }}>Search it</button>
   </>
   );
}