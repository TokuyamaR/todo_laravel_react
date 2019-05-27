import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import ProjectList from "./ProjectList";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />>
                    <Switch>
                        {/* Routeにexactをつけると、pathが完全一致の場合だけマッチしたことになる */}
                        <Route exact path="/" component={ProjectList} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
