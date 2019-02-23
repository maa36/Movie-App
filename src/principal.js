import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./card";
import RatingStar from "./ratingstart";
import Add from "./add";


class Principal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listecard: [
        {
          title: "Baby driver",
          image: "http://jcclm.com/wp-content/uploads/2017/12/883772.jpg",
          rating: 4
        },
        {
          title: "punisher",
          image:
            "https://o.aolcdn.com/images/dims3/GLOB/crop/768x384+3+320/resize/630x315!/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F1a02b02f9d2fb6ac5ae989dce08336a6%2F205738570%2F450219.jpg",
          rating: 3
        },
        {
          title: "Peaky blinders",
          image:
            "https://parismatch.be/app/uploads/2019/01/14674380-low_res-peaky-blinders-iv1-1100x715.jpg",
          rating: 4
        },
        {
          title: "Breaking bad",
          image:
            "https://www.presse-citron.net/wordpress_prod/wp-content/uploads/2019/02/netflix-breaking-bad.jpg",
          rating: 5
        }
      ],

      data: "",
      ratingcolor: "black",
      id: 0,

      
    };
  }
  Recap = event => {
    this.setState({
      data: event.target.value
    });
  };
  changeColor = (event) => {
    let btn = event.target;
    let stars = event.target.parentElement.children;

    if (btn.style.color === "black") {
      for (const star of stars) {
        if (star.style.color === "black") {
          star.style.color = "red";
          this.setState({
            id: this.state.id + 1
          });
          return;
        }
      }
    }
    
    if (btn.style.color === "red") {
      for (let i=stars.length-1; i>=0; i--) {
        if (stars[i].style.color === "red") {
          stars[i].style.color = "black";
          this.setState({
            id: this.state.id - 1
          });
          return;
        }
      }
    }
  };
  
  addmovie =(movie) =>{
    this.setState({
      listecard : [...this.state.listecard,movie]
    })
  }
  

    

  render() {
    return (
      <div>
        <div className="serch">
          <input
            onChange={this.Recap}
            value={this.state.data}
            type="search"
            id="site-search"
            name="q"
          />

          
          <RatingStar
            clicked={this.changeColor}
            etat={this.state.ratingcolor}
          />
        </div>
        <div className="listMovie">
          <Cards
            List={this.state.listecard.filter(el =>
              el.title.toLowerCase().includes(this.state.data.toLowerCase())
              && el.rating >= this.state.id
            )}
          />
        </div>
        <div >
          <Add   addMovie={this.addmovie} />
        </div>
      </div>
    );
  }
}

export default Principal;