import React from 'react';
import _ from 'lodash'
import './App.css';

import Building from './Building'
import Person from './Person'
import Street from './Street'

function App() {
  const [creations, setCreations] = React.useState([])

  const addCreation = CreationType => {
    setCreations([
      <CreationType key={creations.length} />,
      ...creations,
    ])
  }

  return (
    <>
      <div>
        <div onClick={() => addCreation(Person)}>Create Person</div>
        <div onClick={() => addCreation(Building)}>Create Building</div>
        <div onClick={() => addCreation(Street)}>Create Street</div>
      </div>
      <div className="creation-list">
        {creations}
      </div>
    </>
  )
}

export default App;