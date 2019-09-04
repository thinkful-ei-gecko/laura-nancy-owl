import React from 'react';
import './Stage.css';

function Stage(props){

    const onStage = props.participants.filter(participant => (participant.inSession && participant.onStage)).map(
        participant => (
            <div key={participant.id}>
                {participant.name}
                <img src={participant.avatar} alt="{participant.name}"/>
            </div>
        ))
    return (
        <section className='stage'>
            {onStage}
        </section>
    )
}

export default Stage;