import { useNavigate, useParams } from "react-router-dom";
import "./MoviePage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MoviePage = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const [isForm, setIsForm] = useState(false);

  const { id: MovieId } = useParams();
  const nagivate = useNavigate();

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );

        const data = response.data;

        const MovieInfo = data.filter((item) => {
          if (item.show.id == MovieId) return item;
        });

        console.log(MovieInfo[0]);

        setMovieDetail(MovieInfo[0].show);
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
  }, [MovieId]);

  const URL = movieDetail?.image?.original
    ? movieDetail.image.original
    : "https://cdn4.vectorstock.com/i/1000x1000/85/43/error-page-not-found-vector-27898543.jpg";
  const summary = movieDetail?.summary ? movieDetail.summary : "";
  const rating = movieDetail?.rating?.average
    ? movieDetail.rating.average
    : "unknown";
  const premiered = movieDetail?.premiered ? movieDetail.premiered : "unknown";
  const language = movieDetail?.language ? movieDetail.language : "unknown";
  const generes = movieDetail?.genres ? movieDetail.genres : ["unknown"];
  const officialSite = movieDetail?.officialSite
    ? movieDetail.officialSite
    : "unknown";
  const title = movieDetail?.name ? movieDetail.name : "unknown";
  console.log(URL);

  function handleClick() {
    window.location.href = officialSite;
  }

  return (
    <div className="main-root">
      <Navbar></Navbar>
      

      { !isForm ? (
          <div className="main-div">
          <div className="left-div">
            <img src={URL} alt="" />
          </div>
          <div className="right-div">
            <h1>{title}</h1>
            <h3>Rated : {rating} by IMDb</h3>
            <p>Summary : {summary}</p>
            <h3>Premired on : {premiered}</h3>
            <h3>Available in : {language}</h3>
            <div className="generes">
              <h3>Generes : </h3>
              {generes.map((item) => (
                  <h3>{item}</h3>
                  ))}
            </div>
            <div className="btns">
              <button onClick={handleClick} className="btn">
                Official Website
              </button>
              <button onClick={()=>setIsForm(true)} className="btn">Book Show</button>
            </div>
          </div>
        </div>
      ) : (
          <div className="form-root">
            <div className="inner-form">
                    <label htmlFor="title">Movie Name</label>
                    <input type="text" name="tile" value={  "  "+title}></input> <br></br>
                    <label htmlFor="title">Your Name</label>
                    <input type="text" name="tile" placeholder="your name here"></input> <br></br>
                    <label htmlFor="data">Selet movie data</label>
                    <input type="date" name="date" value={"abc"}></input> <br></br>
                    <button onClick={()=> setIsForm(false)}>Submit</button>
                    
            </div>
        </div>
      )}
      </div>
  );
};

export default MoviePage;
