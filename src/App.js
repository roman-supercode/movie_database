import './App.css';
import movies from "./components/data/Data";
import Moviecard from './components/card/Moviecard';

function App() {
    return (
        <>
            <main className='container'>
                {movies.map((item, index) => {
                    return (
                        <Moviecard
                            key={index}
                            title={item.title}
                            year={item.year}
                            director={item.director}
                            duration={item.duration}
                            genre={item.genre}
                            // .toString().split(",").join(`${<br />}`)
                            rate={item.rate}
                        />
                    );
                })}
            </main>
        </>
    );
}

export default App;;;;;;
