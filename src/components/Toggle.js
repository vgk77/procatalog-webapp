import React from 'react';
import PropTypes from 'prop-types';
import { SwitchContainer, SwitchInput, SwitchSlider } from '../styles';

const Toggle = ({ checked, onChange }) => {
    return (
        <SwitchContainer>
			<SwitchInput
				checked={checked}
				onChange={onChange}
                type="checkbox"
                id="checkbox"
			/>
			<SwitchSlider htmlFor="checkbox" />
		</SwitchContainer>
    );
};

Toggle.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Toggle;
