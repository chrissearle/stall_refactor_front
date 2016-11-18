import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import {App} from './components/App'
import {Home} from './components/Home'
import {Loader} from './components/Loader'
import {HorseList} from './components/HorseList'
import {PeopleList} from './components/PeopleList'
import {FeedList} from './components/FeedList'

import manager from './reducers/manager'
import horses from './reducers/horses'
import people from './reducers/people'

import './styles/style.css.scss'

const reducer = combineReducers({
    manager,
    horses,
    people,
    routing: routerReducer
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const history = syncHistoryWithStore(browserHistory, store)

render((
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>

                <Route component={Loader}>
                    <Route path="/horses" component={HorseList}/>
                    <Route path="/people" component={PeopleList}/>
                    <Route path="/feedTypes" component={FeedList}/>
                </Route>
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'))
