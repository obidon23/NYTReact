// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the main Child Components
var Search = require("./Search");
var Results = require("./Results");
var Saved = require("./Saved");

// construct Main components

var Main=React.createClass( {  

    render() {

        return(
        <div>
            <div className="jumbotron">
                <h1>Welcome to the New York Times Artice Retriever</h1>
            </div>
        
            <Search />

            <Results />

            <Saved />
        </div>
        );
    } 

})
module.exports = Main;