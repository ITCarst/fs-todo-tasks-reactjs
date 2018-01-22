import React from 'react';


const Input = ({type, value, name, onChange, className, placeholder }) => (
	<input
		type={type}
		id={name}
		value={value}
		placeholder={placeholder}
		name={name}
		onChange={e => onChange(e.target.value, e)}
		className={className} />
);

export default Input;
