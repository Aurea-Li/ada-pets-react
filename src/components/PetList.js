import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';


const PetList = (props) => {


  const onSelectPet = (index) => {
    props.onSelectPet(index);
  };

  const petList = props.pets.map((pet, i) => {
    return <PetCard key={i}
                    {...pet}
                    onSelectPet={onSelectPet} />
  });

  return (
    <div className="card-group">
      {petList}
    </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
};

export default PetList;
