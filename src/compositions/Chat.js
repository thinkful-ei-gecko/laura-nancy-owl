import React from 'react';
import './Chat.css';


function Chat(props){

  const chatLineup = props.chatEvents.map(chat => {
      const memberId = chat.participantId;
      const memberPic = props.partcipants.find(participant => 
        (participant.id === memberId)).avatar;
      const memberName = props.partcipants.find(participant => 
        (participant.id === memberId)).name;

        if (chat.type === 'message'){
          return (
            <div key={memberId}>
              <img src={memberPic} alt={memberName} />
              <span>{memberName}'-'{chat.time} </span>
              <p>{chat.message}</p> 
            </div>
          );
        } else {
          return (
            <div key={memberId}>
              <span>{memberName}' ' {chat.type}</span>
            </div>
          )
        }
      })
     
      return ( 
        <section className='chatLog'>
          {chatLineup}
        </section>
      );    
  }

export default Chat;