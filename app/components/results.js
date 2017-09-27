// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// construct Results component

var Results=React.createClass( { 


    render() {
  
        return (
            <div className="col-xs-10 col-xs-offset-1">
                <h2>Search Results Here</h2>
            </div>
        )


    }
})

module.exports = Results;