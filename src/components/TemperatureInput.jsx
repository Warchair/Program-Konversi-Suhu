import React, { Component } from 'react';

const NamaSkala = {
    c:'Celcius',
    f:'Fahrenheit',
    r:'Reamur',
    k:'Kelvin'
}

class TemperatureInput extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const skala = this.props.skala;
        const temperature = this.props.temperature;
        // console.log(temperature);
        return (
            <div>
                <h5 class="mt-2">Masukkan Suhu {NamaSkala[skala]}</h5>
                <input className="form-control" value={temperature} onChange={this.handleChange} />
            </div>
        )
    }
}

export default TemperatureInput;