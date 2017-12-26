'use strict';

import React						from 'react';
import {Router, Route, IndexRoute}	from 'react-router';
import CreateBrowserHistory			from 'history/lib/createBrowserHistory';

import App							from './App';

import Home							from './pages/Home';
import Projects						from './pages/Projects';
import Process						from './pages/Process';
import About						from './pages/About';
import CaseStudy					from './pages/CaseStudy';

export default (
	<Router history={CreateBrowserHistory()}>
		<Route path="/" component={App}>

			<IndexRoute component={Home} />

			<Route path="/" component={Home} />
			<Route path="/projects" component={Projects} />
			<Route path="/process" component={Process} />
			<Route path="/about" component={About} />

			<Route path="/projects/*" component={CaseStudy} />
	
		</Route>
	</Router>
);
