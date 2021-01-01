import React from 'react'

function MovieList(props) {
    const FavoriteComponent = props.favoriteComponent;
    const handleFavoritesClick =() => {

    }

    return (
        <>
            {props.movies.map((movie,index) => 
                <div className="image-container d-flex justify-content-start m3" key={index}>
                    <img src={movie.Poster} alt={movie}/>
                    <div className="overlay d-flex align-items-center justify-content-center"
                        onClick={() => props.handleFavoritesClick(movie)}
                    >
                        <FavoriteComponent />
                    </div>
                </div>
            )}
        </>
    )
}

export default MovieList

