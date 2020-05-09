import React from 'react';
import _ from 'lodash'
import './App.css';

import Building from './Building'
import Person from './Person'

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
        <div onClick={() => addCreation(Person)}>Add Person</div>
        <div onClick={() => addCreation(Building)}>Add Building</div>
      </div>
      <div className="creation-list">
        {creations}
      </div>
    </>
  )
}

export default App;