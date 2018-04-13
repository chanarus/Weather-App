import React from 'react';
import ReactDOM from 'react-dom';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

require('./style.css');

const API_KEY = require('../secret/api');

class App extends React.Component {
    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = (e) => {
        e.preventDefault();

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY.key}&units=metric`)
            .then((res) => res.json())
            .then((data) => {
                if(city && country) {
                    this.setState({
                        temp: data.main.temp,
                        city: data.name,
                        country: data.sys.country,
                        humidity: data.main.humidity,
                        description: data.weather[0].description,
                        error: ""                    
                    });
                } else {
                    this.setState({
                        temp: undefined,
                        city: undefined,
                        country: undefined,
                        humidity: undefined,
                        description: undefined,
                        error: "Please Enter City and Country..."
                    });
                }             
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return(
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-5 title-container">
                                    <Titles />
                                </div>
                                <div className="col-xs-7 form-container">
                                    <Form getWeather={this.getWeather}/>
                                    <Weather temp={this.state.temp}
                                            city={this.state.city}
                                            country={this.state.country}
                                            humidity={this.state.humidity}
                                            description={this.state.description}
                                            error={this.state.error}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        );
    }
}                

ReactDOM.render(
    <App />,
    document.getElementById('app')
);