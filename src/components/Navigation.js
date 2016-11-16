import React from 'react'
import {Link} from 'react-router'

export class Navigation extends React.Component {
    render() {
        return <div className="admin">
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <Link className="navbar-brand" to="/">Forsiden</Link>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="/horses">Hestene</Link></li>
                            <li><Link to="/people">Folk</Link></li>
                            <li><Link to="/feedtypes">Fôr</Link></li>
                            <li><a rel="nofollow" data-method="delete" href="/users/sign_out">Logg ut</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main role="main">
                <div className="container">
                    {this.props.children}
                </div>
            </main>
        </div>
    }
}

Navigation.propTypes = {
    children: React.PropTypes.node
}
