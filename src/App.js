import React from 'react';
import participants from './compositions/Store';
import chatEvents from './compositions/Store';
import Participants from './compositions/Participants';
import Stage from './compositions/Stage';
import Chat from './compositions/Chat';

function App(props) {
  return (
    <div className="App">
      <Participants participants = {participants}/>
      <Stage participants = {participants} />
      <Chat participants = {participants} chatEvents = {chatEvents} /> 
    </div>
  );
}

export default App;
