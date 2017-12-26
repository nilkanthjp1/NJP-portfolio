'use strict';

import React from 'react';

class Footer extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	render() {
		var self = this,
			interact = function(s) { self.setState({ open:s }); };

		return (
			<footer className={ self.props.home ? 'home':'' } >
				<div className='footer-button'
					 onMouseEnter={ () => interact(true) }
					 onMouseLeave={ () => interact(false) }>
				</div>
				<div className={ 'footer-content ' + ( (self.state.open||self.props.home) ? 'open' : '') }>
					<div className='footer-gradient'></div>
					<ul className='sections'>
						<li><h3><a href="/projects">Projects</a></h3></li>
						<li><h3><a href="/process">Process</a></h3></li>
						<li><h3><a href="/about">About</a></h3></li>
					</ul>
				</div>
			</footer>
		);
	}

}

export default Footer;
