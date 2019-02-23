import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input
} from "reactstrap";
import "./App.css";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title :'',
      image : '',
      rating : '',
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  addName = (event) =>{
    this.setState({
      title :  event.target.value
    })

  }
  addImage = (event) =>{
    this.setState({
      image :  event.target.value
    })

  }
  addRating = (event) =>{
    this.setState({
      rating :  event.target.value
    })

  }
  cleanInputs = () => {
    this.setState({
        title:'',
        image:'',
        rating: 0,
    })
}
  render() {
    
      
    return (
      <div className="add">
        <Button className="button" color="danger" onClick={this.toggle}>
          Add Movie
        </Button>
        <Modal
           isOpen={this.state.modal}
           toggle={this.toggle}
           className={this.props.className} 
        >
           <form> 
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <Input value={this.state.title} onChange={this.addName} placeholder="title movie" bsSize="lg" />
            <Input value={this.state.image} onChange={this.addImage} placeholder="image" />
            <Input value={this.state.rating} onChange={this.addRating} placeholder="rating" bsSize="sm" />
            <ModalFooter> 
              <Button color="primary" onClick={() => {
                        this.props.addMovie({
                            'title' : this.state.title,
                            'image' : this.state.image,
                            'rating' : this.state.rating,
                           
                        })
                        this.cleanInputs()
                    }} >
                Add movie
              </Button>{" "}

            </ModalFooter> 
          </form>
        </Modal> 
      </div>
    );
  }
}

export default Add;
