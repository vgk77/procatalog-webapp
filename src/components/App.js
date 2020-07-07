import React from 'react';
import { StyledWrapper, StyledContainer } from '../styles';
import Search from './Search';
import Items from './Items';
import Filters from './Filters';

const App = () => (
	<StyledWrapper>
		<StyledContainer>
  			<Search />    
			<Filters />
			<Items />
		</StyledContainer>
	</StyledWrapper>
);

export default App;
