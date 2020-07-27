import React, {Component} from "react";

class Hero extends Component {

    state = {
        heroId: this.props.avenger.heroId, 
        movies: this.props.avenger.movies,
        likeCount : this.props.avenger.likeCount,
    };
    render(){
        return(
    
           <div className="card" style={{width: "18rem;"}}>
                <img src="https://www.vhv.rs/dpng/d/414-4147413_white-avengers-logo-png-transparent-png.png" 
                class="card-img-top"/>

                <div className="card-body">
        <h5 className="card-title">{this.props.avenger.name}</h5>
                       <h6>{this.props.avenger.birthname}</h6>
                            
                            <ul>{this.showMovie()} </ul>
                            <button className="btn btn-info "
                                     onClick = {() => {
                                         this.likeAvenger(1)}}>
                                             Like{""}
                                 <span className = "badge badge-light">
                                    {this.props.avenger.likeCount}
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
    if(this.props.avenger.movies.length===0) 
    return <p>No movies available</p>

    return this.props.avenger.movies.map(movie => <li key = {this.state.movies.indexOf(movie)}>{movie}</li>);
    }

    likeAvenger = (likeCount) => {
      //  this.setState( { likeCount : this.state.likeCount +1});
    };
}

export default Hero;