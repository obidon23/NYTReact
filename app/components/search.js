// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// construct Search component

var Search=React.createClass( { 


    render() {
        return (
        <div>
            <div className="col-xs-10 col-xs-offset-1">
                <h2>Welcome to the New York Times Artice Retriever</h2>

                <form>
                    {/* <input type="text" name="keyword">
                        <p>Enter a Keyword</p>
                    </input>            

                    <input type="text" name="startYear">
                        <p>Enter a Starting year</p>
                    </input>

                    <input type="text" name="endYear">
                        <p>Enter a End Year</p>
                    </input>                 */}

                    <button type="submit" className="btn btn-primary">
                        Search
                    </button>
                </form>
            </div>
        </div>
        )
    }
})

module.exports = Search;