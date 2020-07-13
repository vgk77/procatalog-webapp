import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Toggle from './Toggle';
import { updateSettings } from '../actions';
import { Styled } from '../styles';

const ToogleTheme = () => {
	const [isLightTheme, setIsLightTheme] = useState(false);
	const dispatch = useDispatch();

	const handleOnSwitch = () => {
		setIsLightTheme(!isLightTheme);
		dispatch(updateSettings({ theme: isLightTheme
			? 'dark'
			: 'light'
		}));
	};

	return (
		<Styled.ToggleThemeContainer>
			<div style={{ display: 'flex' }}>
				<div>Is light theme</div>
				<Toggle
					name="theme"
					checked={isLightTheme}
					onChange={handleOnSwitch}
				/>
			</div>
		</Styled.ToggleThemeContainer>
	);
};

export default ToogleTheme;
