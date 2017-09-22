// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the main Child Components
var Search = require("./components/Search");
var Results = require("./components/Results");
var Saved = require("./components/Saved");

// construct Main components

var Main=react.createClass() { 


    .render() {
        <div className="jumbotron">
            <h1>Welcome to the New York Times Artice Retriever</h1>
        </div>
        
        <Search />

        <Results />

        <Saved />
    }
}

module.exports = Main;