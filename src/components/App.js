import React from 'react';
import { Styled, GlobalStyle } from '../styles';
import Search from './Search';
import Items from './Items';
import Filters from './Filters';
import ToggleTheme from './ToggleTheme';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

const App = () => {
	const { settings } = useSelector(store => store);
	const { pathname } = useLocation();
	
	const isSearchTop = pathname.includes('/items/');

	return (
		<ThemeProvider theme={{ mode: settings.theme }}>
			<GlobalStyle />
			<Styled.Wrapper>
				<Styled.Container isSearchTop={isSearchTop}>
					<ToggleTheme />
					<Search />    
					<Filters />
					<Items />
				</Styled.Container>
			</Styled.Wrapper>
		</ThemeProvider>
	);
};

export default App;
