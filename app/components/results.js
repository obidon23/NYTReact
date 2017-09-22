// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// construct Results component

var Results=react.createClass() { 


    .render() {
        <div className="col-xs-10 col-xs-offset-1">
            <h2>Welcome to the New York Times Artice Retriever</h2>

            <form>
                <input type="text" name="keyword" placeholder="">
                    <p>Enter a Keyword</p>
                </input>            

                <input type="text" name="startYear" placeholder="">
                    <p>Enter a Starting year</p>
                </input>

                <input type="text" name="endYear" placeholder="">
                    <p>Enter a End Year</p>
                </input>                

                <button> type="submit" class="btn btn-primary">
                    Search
                </button>
            </form>
        </div>


    }
}

module.exports = Search;