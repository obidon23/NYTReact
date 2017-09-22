// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");
var mongodb = require("mongo");
var mongoose = require("mongoose");
// construct Saved component

var Saved=react.createClass() { 

// Retreive saved search results from the mongo database    

//Push Saved results to the DOM
    .render() {
        <div className="col-xs-10 col-xs-offset-1">
            <h2>Search Results Here</h1>
        </div>
    }
}

module.exports = Saved;