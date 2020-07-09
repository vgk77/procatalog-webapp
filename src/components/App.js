import React from 'react';
import { Styled } from '../styles';
import Search from './Search';
import Items from './Items';
import Filters from './Filters';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
	<Styled.Wrapper>
		<Styled.Container>
			<BrowserRouter>
	  			<Search />    
				<Filters />
				<Items />
			</BrowserRouter>
		</Styled.Container>
	</Styled.Wrapper>
);

export default App;
