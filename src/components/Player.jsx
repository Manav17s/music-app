export const Player = ({fn,song}) =>{
    return(
    <div>
        
        <button onClick = {()=>{
            fn(false,null);
        }}
         
            className="btn btn-success">Back to songs</button>
            <br/>
        <p>
        <img src = {song.artworkUrl100}/> 
        <br/>
        {song?.artistName}{song?.trackName}
        </p>
        
        <br/>
    <audio controls>
       
       <source src={song?.previewUrl} type="audio/mp4" />
     Your browser does not support the audio element.
    </audio>
    </div>)
}