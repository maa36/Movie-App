import React  from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Rating from  './Rating'


const Cards = props =>
  props.List.map((p, i) => (
      <div key={i} class="card" style={{ width: 18 + "em" }}>
        <img
          src={p.image}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <div className="name">
            <h5 class="card-title">Title : </h5>
            <h5 className="title">{p.title}</h5>
          </div>
        </div>
        <Rating valeur={p.rating} />
        </div>
  ));

export default Cards;
