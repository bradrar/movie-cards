import React from 'react';

const MovieCard = (props) => {
    return (      
        <div className="d-flex mb-5">

          
        <div className="card" style={{width: 18 + 'rem'}}>
        <img className="card-img-top"  src={require("../images/Ghost_In_The_Shell_2_0.jpg")} alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.movie.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.movie.subtitle}</h6>
          <p className="card-text">{props.movie.description}</p>

        </div>
        <div className="card-footer text-muted">
             Rating : {props.movie.rating}  out of 5
        </div>
      </div>
      </div>
    )
}

export default MovieCard