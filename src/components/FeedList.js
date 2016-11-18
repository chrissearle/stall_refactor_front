import React from 'react'

import {Navigation} from './Navigation'

export class FeedList extends React.Component {
    render() {
        return <div className="list">
            <h1 className="title">Fôr</h1>

            <Navigation/>

            <div className="objectList">
            </div>
        </div>
    }
}



