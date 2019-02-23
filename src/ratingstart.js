import React from "react";
import "./App.css";


class RatingStart extends React.Component {
    constructor(props){
        super(props)
        
    }
  


  render(){
    let stars = [];
    for (let i = 0; i < 5; i++) {
      
      stars.push(<i class="fas fa-star" id="1" onClick={this.props.clicked} style={{ color: this.props.etat }} />)

    }
  return (
    <div className="rating">
      <h5> Rating </h5>
      <div>
        {stars}
      </div>
    </div>
  );
}
}

export default RatingStart;
