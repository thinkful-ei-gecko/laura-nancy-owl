import React from 'react';
import './ParticipantsStyle.css';



function Participants(props) {

    const activeParticipants = props.participants.filter(participant => participant.inSession).map(
        participant => (
                <li key={participant.id}>
                    {participant.name}
                    <img src={participant.avatar} alt="{participant.name}"/>
                    <span>{participant.onStage ? 'on stage' : 'observer'}</span>
                </li>))

    return (
        <section className='participantsList'>
            <div className='info'>
                <ul>
                    {activeParticipants}
                </ul>
            </div>
        </section>
    )
}

export default Participants;