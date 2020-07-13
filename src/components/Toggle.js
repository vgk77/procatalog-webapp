import React from 'react';
import PropTypes from 'prop-types';
import { SwitchContainer, SwitchInput, SwitchSlider } from '../styles';

const Toggle = ({ checked, onChange, name }) => {
	return (
		<SwitchContainer>
			<SwitchInput    
				checked={checked}
				onChange={onChange}
				type="checkbox"
				id={`checkbox-${name}`}
			/>
			<SwitchSlider htmlFor={`checkbox-${name}`} />
		</SwitchContainer>
	);
};

Toggle.propTypes = {
	name: PropTypes.string,
	checked: PropTypes.bool,
	onChange: PropTypes.func,
};

export default Toggle;
