import { useNavigate } from "react-router-dom"
import "./Card.css"



const Card = ( { name  , language , url , rating , premiered , id }) => {

    const navigate = useNavigate();

    return (
        <div className="Card-root">
            <img src={url}></img>
            <h5>Title: {name}</h5>
            <h5>Rating: {rating}</h5>
            <h5>Language: {language}</h5>
            <h5>Premiered: {premiered}</h5>
            <button onClick={() => { navigate(`/${id}`) }}>View</button>
        </div>
    )
}

export default Card