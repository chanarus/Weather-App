import React from 'react';
import ReactDOM from 'react-dom';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

class App extends React.Component {
    render() {
        return(
            <div>
                Hello!
                <Titles />
                <Form />
                <Weather />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);