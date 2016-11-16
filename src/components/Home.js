import React from 'react'
import {Link} from 'react-router'

export class Home extends React.Component {
    render() {
        return <div>
            <header role="banner">
                <div className="title">
                    <h1>
                        Stall Svarterud
                    </h1>
                </div>
            </header>

            <main className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="jumbotron">
                            <p>
                                <img className="img-responsive center-block" src={require('../images/stallen.jpg')}/>
                            </p>
                            <p>
                                Stall Svarterud er en liten stall på Enebakkneset.
                            </p>
                            <p>
                                Kontakt: Cecilie Taylor / 461 60 207
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row small-nav">
                    <div className="col-xs-12">
                        <Link className="default-btn" to="/horses">Hesteoversikt</Link>
                    </div>
                </div>
            </main>

            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <Link className="default-btn" to="/horses">Hesteoversikt</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    }
}
