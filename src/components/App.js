import React from 'react';
import { StyledWrapper, StyledContainer } from '../styles';
import { BrowserRouter } from 'react-router-dom';
import Search from './Search';
import ItemsContainer from './ItemsContainer';
import Tags from './Tags';

const App = () => {
	return (
		<StyledWrapper>
			<StyledContainer>
  			<Search />
				<Tags />
  			<BrowserRouter>
  				<ItemsContainer />
  			</BrowserRouter>
			</StyledContainer>
		</StyledWrapper>
	);
};

export default App;
