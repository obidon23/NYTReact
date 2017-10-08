// Include the Main React Dependencies
import React, {Component} from "react";

// construct Search component

class Search extends Component { 

    
    render() {
        return (
            <div>
            <div className="col-xs-10 col-xs-offset-1">
                <h2>Welcome to the New York Times Article Retriever</h2>

                <form>
                    <input type="text" id="keyword" value={this.props.keyword} onChange={this.props.onChange} />
                        <p>Enter a Keyword</p>

                    <input type="text" id="startYear" value={this.props.startYear} onChange={this.props.onChange} />
                        <p>Enter a Starting year</p>
 
                    <input type="text" id="endYear" value={this.props.endYear} onChange={this.props.onChange} />
                        <p>Enter a End Year</p>

                    <button type="submit" className="btn btn-primary" onClick={this.props.getArticles}>
                        Search
                    </button>
                </form>
            </div>
        </div>
        )
    }
}

module.exports = Search;