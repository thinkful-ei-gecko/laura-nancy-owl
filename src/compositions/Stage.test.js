import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './Stage';
import participants from './ParticipantsList';
import renderer from 'react-test-renderer';

describe('<Stage />', () => {
    it('renders without crashing', () => {
        // Create a DOM element to render the component into
        const div = document.createElement('div');

        // Render the component
        // If something is wrong it will fail here
        ReactDOM.render(<Stage participants = {participants}/>, div);

        // Clean up
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders this UI as expected', () => {
        // Render the component, as JSON
        const tree = renderer.create(<Stage participants = {participants}/>).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });
});