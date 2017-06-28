import React from 'react'

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return 'What is your problem? That\'s not a number';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
	const scale = props.scale; //either c or f
	if(scale == 'c'){
		var message = tryConvert(props.temperature, toFahrenheit);
	}else{
		var message = tryConvert(props.temperature, toCelsius);
	}

  if ((message >= 100) && (scale == 'c'))  {
    return <p>The water would boil.</p>;
  }else if((message >= 212) && (scale == 'f')){
   	return <p>The water would boil.</p>;
  }else{
  	return <p>The water would not boil.</p>;	
  }
  
}

export default BoilingVerdict;