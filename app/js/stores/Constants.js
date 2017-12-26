'use strict';

import Reflux from 'reflux';

const ConstantsStore = Reflux.createStore({
	
	phases: [
		{ 
			name: 'Research', 
			desc: 'Click to see a project heavily influenced by the research phase of my process.',
			interest: 'talking to customers',
			icon: [
				{ shape:'triangle', type:'border', width:.75 },
				{ shape:'triangle', type:'fill', width:.25 },
				{ shape:'circle', type:'border', width:.5 }
			]
			
		},
		{ 
			name: 'Design', 
			desc: 'Click to see a project heavily influenced by the design phase of my process.',
			interest: 'designing products',
			icon: [
				{ shape:'square', type:'border', width:.75 },
				{ shape:'square', type:'fill', width:.25 },
				{ shape:'triangle', type:'border', width:.5 }
			]
		},
		{ 
			name: 'Development', 
			desc: 'Click to see a project heavily influenced by the coding and implementation phases of my process.',
			interest: 'writing clean code',
			icon: [
				{ shape:'circle', type:'border', width:.75 },
				{ shape:'circle', type:'fill', width:.25 },
				{ shape:'line', type:'fill', width:.5 },
				{ shape:'line', type:'fill', width:.5 },
				{ shape:'line', type:'fill', width:.5 },
				{ shape:'line', type:'fill', width:.5 }
			]
		}
	],
	
	interests: [
		'designing products', 
		'building products', 
		'designing interactions', 
		'talking to customers', 
		'deploying frontends', 
		'building frontends', 
		'animating in css'
	],
	
	windowSizes: {
		500: 'mobile',
		768: 'tablet',
		1024: 'desktop',
		5000: 'max'
	},
	
	iconSizes: {
		'mobile': 50,
		'tablet': 75,
		'desktop': 100,
		'max': 150
	},

	carouselItemHeights: {
		'mobile': 50,
		'tablet': 75,
		'desktop': 100,
		'max': 150
	}
});

export default ConstantsStore;
