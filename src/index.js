import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// function Test() {
//     const [movieRating, setMovieRating] = useState(0);
//     return (
//         <div>
//             <StarRating onSetRating={setMovieRating}/>
//             <p>{movieRating} stars</p>
//         </div>
//     );
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
        {/*<StarRating/>*/}
        {/*<StarRating maxRating={8}/>*/}
        {/*<Test/>*/}
    </React.StrictMode>
);

