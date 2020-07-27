import React, {Component} from "react";

class Hero extends Component {

    state = {
        heroId: -189, 
        movies: ['Movie 1', 'Movie 2'],
        likeCount : this.props.likeCount,
    };
    render(){
        return(
    
           <div className="card" style={{width: "18rem;"}}>
                <img src="https://www.vhv.rs/dpng/d/414-4147413_white-avengers-logo-png-transparent-png.png" 
                class="card-img-top"/>

                <div className="card-body">
                    <h5 className="card-title">Avengers Name</h5>
                       <h6>Avengers Birth Name</h6>
                            
                            <ul>{this.showMovie()} </ul>
                            <button className="btn btn-primary " onClick = {() => {this.likeAvenger(1)}}>
                                Like{""}
                                 <span className = "badge badge-light">
                                    {this.state.likeCount}
                                </span>
                            </button>     
                            
                    </div>
            </div>
        
        );
    }


isHero(){

   return this.state.heroId < 0? "Not an Avenger" : "Is an Avenger";
    }

showMovie(){
    if(this.state.movies.length===0) return <p>No movies available</p>

    return this.state.movies.map(movie => <li key = {this.state.movies.indexOf(movie)}>{movie}</li>);
    }

    likeAvenger = (likeCount) => {
        this.setState( { likeCount : this.state.likeCount +1});
    };
}

export default Hero;