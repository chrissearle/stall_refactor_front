/* globals document */

import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import {App} from './components/App'
import {Home} from './components/Home'
import {Navigation} from './components/Navigation'
import {HorseList} from './components/HorseList'

import './styles/style.css.scss'

const reducer = combineReducers({
    routing: routerReducer
})

const store = createStore(reducer)

const history = syncHistoryWithStore(browserHistory, store)

render((
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>

                <Route path="/nav" component={Navigation}>
                    <Route path="/horses" component={HorseList}/>
                    <Route path="/people" component={HorseList}/>
                    <Route path="/feedTypes" component={HorseList}/>
                </Route>
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'))
