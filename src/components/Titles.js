import React from 'react';

class Titles extends React.Component {
    render() {
        return(
            <div>
                <h1 className="title-container__title">Weather Finder</h1>
                <p className="title-container__subtitle">Find out temperature, condition and etc...</p>
            </div>
        );
    }
}

export default Titles;