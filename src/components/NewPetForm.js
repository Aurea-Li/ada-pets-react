import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      species: '',
      location: '',
      image: '',
      about: ''
    };
  }

  onInputChange = (e) => {

    const updatedState = {};
    const field = e.target.name;
    const value = e.target.value;

    updatedState[field] = value;
    this.setState(updatedState);

  };


  onFormSubmit = (e) => {
    e.preventDefault();

    const newPet = this.state;

    this.setState({
      name: '',
      species: '',
      location: '',
      image: '',
      about: ''
    })

    this.props.addPetCallback(newPet);
  };


  render() {
    return (
      <form  className="new-pet-form" onSubmit={this.onFormSubmit}>
        <h3>Add a Pet</h3>
          <div>
              <label htmlFor="name">Name:</label>
              <input
                name="name"
                value={this.state.name}
                onChange={this.onInputChange}
                />
            </div>
            <div>
              <label htmlFor="species">Species:</label>
              <input
                name="species"
                value={this.state.species}
                onChange={this.onInputChange}
                />
            </div>
            <div>
              <label htmlFor="location">Location:</label>
              <input
                name="location"
                value={this.state.location}
                onChange={this.onInputChange}
                />
            </div>
            <div>
              <label htmlFor="image">Image:</label>
              <input
                name="image"
                value={this.state.image}
                onChange={this.onInputChange}
                />
            </div>
            <div>
              <label htmlFor="about">About:</label>
              <textarea
                name="about"
                value={this.state.about}
                onChange={this.onInputChange}
                />
            </div>
        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  }

}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;
