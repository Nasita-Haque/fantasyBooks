import React from 'react';
import ReactDOM from 'react-dom';

//Files

class App extends React.Component {
	render(){
		return (
			<FantasyBooks />
		)
	}
};

ReactDOM.render(<App />, document.getElementById('app'));