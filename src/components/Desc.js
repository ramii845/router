import React from 'react'

const Desc = (props) => {
    let movie=props.movies.find(el=>el.id==props.match.params.id)
    return (
        <div>
            <h1>{movie.name}</h1>
            <h2>{movie.rating} </h2>
        </div>
    )
}

export default Desc;
