import React, {Component} from "react";
import axios from "axios";
import Hero from "./Hero";

class Heroes extends Component {
    state = {
        allAvengers: []
    };

    render() {
        return (
           <div className = "container">
               <div className= "row">
                   {this.state.allAvengers.map((avenger) => (
                   <div className= "col" key= {avenger.id}>
                       <Hero 
                       key= {avenger.id} 
                       avenger= {avenger}

                       />
                   </div> 
                   ))}

               </div>

           </div>
         );
    }

    async componentDidMount(){
    let {data} = await axios.get("http://localhost:5000/api/heroes");
    console.log(data);

    data.map(avenger=> {
     return {
         id: avenger._id,
         imgurl: avenger.imgurl,
         name: avenger.name,
         birthname: avenger.birthname,
         likeCount: avenger.likeCount,
         movies: avenger.movies,
         };
    });
};
export default Heroes;
