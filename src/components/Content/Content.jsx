import { useState } from "react";
import Card from "./Cards/Card";
import "./Content.css"
import { useEffect } from "react";
import axios from "axios";



const Content = () => {

    const [movies, SetMovies] = useState([]);

    useEffect( ()=> {

        async function getMovies(){
            const response = await axios.get("https://api.tvmaze.com/search/shows?q=all")
            console.log(response.data)
            SetMovies(response.data);
        }

        getMovies();

    } , [])

    return (
        <div className="Content-root">
            {
                movies.map( (movie) => {

                        const premiered = movie.show.premiered?movie.show.premiered : "unknown"
                        const rating = movie.show.rating.average?movie.show.rating.average : "unknown"
                        if(movie.show.image)
                        {

                            return <Card id={movie.show.id} key={movie.show.id} name={movie.show.name} rating={rating} premiered={premiered} language = {movie.show.language} url = {movie.show.image.medium} ></Card>

                        }else{

                            return <Card key={movie.show.id} name={movie.show.name} rating={rating} premiered={premiered} language = {movie.show.language} url = {"https://cdn4.vectorstock.com/i/1000x1000/85/43/error-page-not-found-vector-27898543.jpg"} ></Card>

                        }
                        
                    })
            }
        </div>
    )
}

export default Content;