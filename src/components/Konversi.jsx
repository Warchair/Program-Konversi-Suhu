import React, { Component} from 'react';
import TemperatureInput from './TemperatureInput';

function fromCelsius(Celsius, skala) {
    let fahrenheit = (9 / 5) * Celsius +  32;
    let reamur = (4 / 5) * Celsius;
    let kelvin = Celsius + 273;
    const convert = { F:fahrenheit, R:reamur, K:kelvin};
    if(skala === 'r') {
        return convert.R;
    } else if(skala === 'f') {
        return convert.F;
    }
    else if(skala === 'k') {
        return convert.K;
    }
}

function fromReamur(Reamur,skala) {
    let celsius = (5 / 4) * Reamur;
    let fahrenheit = (9 / 4) * Reamur + 32;
    let kelvin = celsius + 273;
    const convert = { C:celsius, F:fahrenheit, K:kelvin};
    if(skala === 'f') {
        return convert.F;
    } else if(skala === 'c') {
        return convert.C;
    } 
    else if(skala === 'k') {
        return convert.K;
    }
}

function fromFahrenheit(Fahrenheit,skala) {
    let celsius = 5 / 9 * (Fahrenheit - 32);
    let reamur = 4 / 9 * (Fahrenheit - 32);
    let kelvin = celsius + 273;
    const convert = { C:celsius, R:reamur, K:kelvin };
    if(skala === 'r') {
        return convert.R;
    } else if(skala === 'c') {
        return convert.C;
    }
    else if(skala === 'k') {
        return convert.K;
    }
}

function fromKelvin(Kelvin,skala) {
    let celsius = Kelvin - 273;
    let reamur = 4 / 5 * (Kelvin - 273);
    let fahrenheit = 9 / 5 * (Kelvin - 273) + 32;
    const convert = {C:celsius, R:reamur, F:fahrenheit };
    if(skala === 'r') {
        return convert.R;
    } else if(skala === 'c') {
        return convert.C;
    } else if(skala === 'f') {
        return convert.F;
    }
}

function Converter(temperature, Suhu, skala) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
        return '';
    }
    const output = Suhu(input, skala);
    const rounded = Math.round(output * 1000) / 1000;
    return output.toString();
}


class Konversi extends Component {

    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.handleReamurChange = this.handleReamurChange.bind(this);
        this.handleKelvinChange = this.handleKelvinChange.bind(this);
        this.state = {temperature:'', skala:'c'};
    }

    handleCelsiusChange(temperature) {
        this.setState({temperature, skala:'c'});
    }
    handleFahrenheitChange(temperature) {
        this.setState({temperature, skala:'f'});
    }
    handleReamurChange(temperature) {
        this.setState({temperature, skala:'r'});
    }

    handleKelvinChange(temperature) {
        this.setState({temperature, skala:'k'});
    }

    render() {
        const skala = this.state.skala;
        const temperature = this.state.temperature;

        let hasilReamur;
        let hasilFahrenheit;
        let hasilCelsius;
        let hasilKelvin;

        if(skala === 'f') {
            hasilCelsius = Converter(temperature,fromFahrenheit,'c');
            hasilReamur = Converter(temperature, fromFahrenheit, 'r');
            hasilKelvin = Converter(temperature,fromFahrenheit, 'k');
        } else if(skala === 'r') {
            hasilCelsius = Converter(temperature, fromReamur, 'c');
            hasilFahrenheit = Converter(temperature, fromReamur, 'f');
            hasilKelvin = Converter(temperature,fromReamur, 'k');
        } else if(skala === 'c') {
            hasilReamur = Converter(temperature, fromCelsius, 'r');
            hasilFahrenheit = Converter(temperature, fromCelsius, 'f');
            hasilKelvin = Converter(temperature,fromCelsius, 'k');
        }
        else if(skala === 'k') {
            hasilCelsius = Converter(temperature,fromKelvin, 'c');
            hasilReamur = Converter(temperature, fromKelvin, 'r');
            hasilFahrenheit = Converter(temperature, fromKelvin, 'f');
        }
        else {
            hasilCelsius =  temperature;
            hasilFahrenheit = temperature;
            hasilReamur = temperature;
            hasilKelvin = temperature;
        }
        
        return(
            <div>
                <TemperatureInput skala='c' temperature={hasilCelsius} onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput skala='r' temperature={hasilReamur} onTemperatureChange={this.handleReamurChange} />
                <TemperatureInput skala='f' temperature={hasilFahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
                <TemperatureInput skala='k' temperature={hasilKelvin} onTemperatureChange={this.handleKelvinChange} />
            </div>
        )
    }
}

export default Konversi;