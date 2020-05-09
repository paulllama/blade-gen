import React from 'react';
import _ from 'lodash'
import './App.css';


import Person from './Person'

function App() {
  const [creations, setCreations] = React.useState([])

  const addPerson = () => {
    setCreations([
      <Person key={creations.length} />,
      ...creations,
    ])
  }

  return (
    <>
      <div>
        <div onClick={addPerson}>Add Person</div>
      </div>
      <div className="creation-list">
        {creations}
      </div>
    </>
  )
}

export default App;