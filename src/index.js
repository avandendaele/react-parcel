import React from "react";
import ReactDOM from "react-dom";
import './app.scss';
import '@material/top-app-bar';

class App extends React.Component {
    render() {
        return (
            <header className="mdc-top-app-bar mdc-top-app-bar--fixed">
                <div className="mdc-top-app-bar__row">
                    <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                        <span className="mdc-top-app-bar__title">Liste de souhaits d'Alexis</span>
                    </section>
                </div>
            </header>
        );
    }
}


var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);