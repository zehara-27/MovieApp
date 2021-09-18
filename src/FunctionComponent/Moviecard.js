import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import OurJson from './utility/api';

const Moviecard=() =>{
    const [Movies, setMovies]= useState();
    useEffect(async () => {
        const file = await fetch(OurJson.MovieFetch);
        const data=await file.json();
        setMovies(data.Search);

    },[]);
    console.log(Movies)
    return (
        <Poster>
        {Movies.map((movie)=>{

         return(
             <Movies key={movie.imdbID}>
                 <img className="image" src={movie.Poster} alt=""/>
                 <h6>{movie.Title}</h6>
             
             </Movies> 
         );

        })}
            
        </Poster>
    );
};

const Poster = styled.div`
   display: flex;
`;

const Movie = styled.div`
  width:75px;
  .image{
      object-fit: constain;
      width:100%;
      height:100px
  }
`;
export default Moviecard;
