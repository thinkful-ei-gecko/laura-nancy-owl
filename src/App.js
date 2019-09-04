import React from 'react';
import participants from './compositions/ParticipantsList';
import Participants from './compositions/Participants';
import Stage from './compositions/Stage';

function App(props) {
  return (
    <div className="App">
      <Participants participants = {participants}/>
      <Stage participants = {participants} />
    </div>
  );
}

export default App;
