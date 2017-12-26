'use strict';

import React from 'react';

class Footer extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		var self = this,
			svgStyle = { background: 'none' },
			shapes = {
			classNameGenerator: function(shape, index, type) { return shape+' index-'+index+' '+type; },
			triangle: function(index, width, type) { 
				return (<svg key={index} style={ svgStyle }  className={ this.classNameGenerator('triangle',index,type) }><polygon points={ '0,'+width+' '+width/2+',0 '+width+','+width }/></svg>); 
			},
			square: function(index, width, type) { 
				return (<div key={index} className={ this.classNameGenerator('square',index,type) }></div>);  
			},
			circle: function(index, width, type) { 
				return (<div key={index} className={ this.classNameGenerator('circle',index,type) }></div>);  
			},
			line: function(index, width, type) { 
				return (<div key={index} className={ this.classNameGenerator('line',index,type) }></div>);  
			}
		};

		var icon = this.props.phase.icon.map(function(item, index) {
			return shapes[item.shape](index+1, item.width*self.props.width, item.type); 
		});

		return (
			<div className='phase-icon'>
				{ icon }
			</div>
		);
	}

}

export default Footer;
