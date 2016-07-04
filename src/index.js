//Add some libraries
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

//Youtube API
const API_KEY = "AIzaSyBvomC628DSRHo_k0HpsSH4JtHbga3_4nY"

// Create a new component.This component should produce some HTML
const App = () => {
	return (
		<div>
		<SearchBar />
		</div>
		);
};

// Take this component's generated HTML and put it osn the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))

