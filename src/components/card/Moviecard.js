import "./Moviecard.css";

function Moviecard(props) {
    return (
        <article className="m-card">
            <p>{props.title}</p>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <p>{props.rate}</p>
            <p>{props.genre}</p>
        </article >
    );
}

export default Moviecard;