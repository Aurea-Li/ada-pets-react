import React, { Component } from 'react';
import PetList from './components/PetList';
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import pets from './data/pets.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: undefined,
    };
  }

  onSelectPet = (index) => {
    const petList = this.state.petList;
    const petIndex = petList.findIndex(pet => pet.id === index);

    const pet = petList[petIndex];
    this.setState({
      currentPet: pet
    });
  };

  render() {
    const { currentPet, petList } = this.state;

    let petDetails = '';
    if (currentPet !== undefined) {
      petDetails = <PetDetails currentPet={currentPet} />
    }

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>

        <section className="search-bar-wrapper">
          <SearchBar />
        </section>

        <section className="pet-details-wrapper">
          {petDetails}
        </section>

        <section className="pet-list-wrapper">
          <PetList pets={petList}
                    onSelectPet = {this.onSelectPet}
                    />
        </section>

        <section className="new-pet-form-wrapper">
          { /* Wave 3:  Where NewPetForm should appear */ }
        </section>
      </main>
    );
  }
}

export default App;
