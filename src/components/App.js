import React from 'react'

import DocumentTitle from 'react-document-title'

export class App extends React.Component {
    render() {
        return (
            <DocumentTitle title="Stall Svarterud">
                <div>

                    {this.props.children}

                </div>
            </DocumentTitle>
        )
    }
}

App.propTypes = {
    children: React.PropTypes.node
}
