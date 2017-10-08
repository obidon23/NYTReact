// Include the Main React Dependencies
import React, {Component} from "react";
// var mongodb = require("mongo");
// var mongoose = require("mongoose");
// construct Saved component

class Saved extends Component { 

// Retreive saved search results from the mongo database    

//Push Saved results to the DOM
    render() {
        return (
        <div className="col-xs-10 col-xs-offset-1">
            <h2>Saved Articles Here</h2>
        </div>
        )
    }
}

module.exports = Saved;