'use strict';

import React			from 'react';
import {Link}			from 'react-router';
import DocumentTitle 	from 'react-document-title';
import PhaseIcon		from '../components/PhaseIcon';
import Constants  		from '../stores/Constants';

const propTypes = {
	phases: React.PropTypes.array
};

class Home extends React.Component {

	constructor(props) {
		super(props);
		var self = this;
		this.state = {
			carousel: 0,
			carouselBlocked: false,
			carouselItemHeight: -56.5,
			width: 'max'
		};
		this.carousel = {
			rand: function() {
				if (!self.state.carouselBlocked) {
					self.setState({ carousel : Math.floor( Math.random() * self.props.interests.length ) - 1 }); 
				}
			},
			init: function() {
				self.setInterval(self.carousel.rand, 4000);
			}
		};
		this.resize = function() {
			for (var size in Constants.windowSizes) {
				if (window.innerWidth < parseInt(size)) {
					self.setState({ width: Constants.windowSizes[size] });
					break;
				}
			}
		};
	}

	componentWillMount() {
		this.intervals = [];
	}

	setInterval() {
		this.intervals.push(setInterval.apply(null, arguments));
	}

	componentWillUnmount() {
		this.intervals.forEach(clearInterval);
	}

	componentDidMount() {
		this.carousel.init();
		this.resize();
		window.addEventListener("resize", this.icons.resize);
	}

	render() {
		var self = this;

		var phasesHover = {
			on: function(phase) { 
				self.setState({ 
					carousel : self.props.interests.indexOf(phase.interest)-1,
					carouselBlocked : true
				});
			},
			off: function() {
				self.setState({ 
					carouselBlocked : false
				});
			}
		};

		var phases = this.props.phases.map(function(item, index) {
			return (
				<li key={item.name} 
					className={'phase-'+(index+1)} 
					onMouseEnter={ () => phasesHover.on(item) }
					onMouseLeave={ phasesHover.off }> 
					<div className='phase-content'>
						<h3>{item.name}</h3>
						<PhaseIcon index={index+1} phase={item} width={Constants.iconSizes[self.state.width]} />
						<p className='centered'>{item.desc}</p>
					</div>
				</li> 
			); 
		});

		var carouselStyle = { top: (self.state.carousel * self.state.carouselItemHeight + 'px') }

		var interests = this.props.interests.map(function(item, index) {
			return (
				<li key={item} className={'interest-'+(index+1)}> 
					<h2>{ item + '.' }</h2>
				</li> 
			); 
		});

		return (
			<DocumentTitle title='Nilkanth Patel'>
				<section className='home'>
					<ul className='icons'>{phases}</ul>
					<div className='welcome'>
						<h1>Hi, I&#8217;m Nilkanth.</h1>
						<div className='interests'>
							<h2>I like </h2>
							<div className='interests-carousel'>
								<ul style={carouselStyle}>{interests}</ul>
							</div>
							<div className='interests-gradient bottom'></div>
							<div className='interests-gradient top'></div>
						</div>
					</div>
				</section>
			</DocumentTitle>
		);
	}

}

Home.propTypes = propTypes;

export default Home;
