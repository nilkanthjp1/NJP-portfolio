'use strict';

import React			from 'react';
import Constants  		from './stores/Constants';
import Header			from './components/Header';
import Footer			from './components/Footer';

const propTypes = {
	params: React.PropTypes.object,
	query: React.PropTypes.object,
	children: React.PropTypes.oneOfType([
		React.PropTypes.array,
		React.PropTypes.object
	])
};

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {

	}

	componentDidMount() {
		
	}

	componentWillUnmount() {

	}

	renderChildren() {
		return React.cloneElement(this.props.children, {
			phases: Constants.phases,
			interests: Constants.interests
		});
	}

	render() {
		console.log(this.props.route)

		return (
			<div>

				<Header phases={Constants.phases} />

				{this.renderChildren()}

				<Footer home={ (this.props.route.path==='/') } />

			</div>
		);
	}

}

App.propTypes = propTypes;

export default App;
