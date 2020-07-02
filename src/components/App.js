import React from 'react';
import { StyledWrapper, StyledContainer } from '../styles';
import { BrowserRouter } from 'react-router-dom';
import Search from './Search';
import Items from './Items';
import Filters from './Filters';

const App = () => (
	<StyledWrapper>
		<StyledContainer>
  			<Search />
			<Filters />
  			<BrowserRouter>
  				<Items />
  			</BrowserRouter>
		</StyledContainer>
	</StyledWrapper>
);

export default App;
