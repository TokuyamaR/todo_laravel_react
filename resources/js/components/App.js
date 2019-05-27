import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import NewProject from "./NewProject";
import ProjectList from "./ProjectList";
import SingleProject from "./SingleProject";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />>
                    <Switch>
                        {/* Routeにexactをつけると、pathが完全一致の場合だけマッチしたことになる */}
                        <Route exact path="/" component={ProjectList} />
                        <Route path="/create" component={NewProject} />
                        <Route path="/:id" component={SingleProject} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
