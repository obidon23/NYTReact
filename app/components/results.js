// Include the Main React Dependencies
import React from "react";

// construct Results component

const Results = props => (
    <div className="col-xs-10 col-xs-offset-1">
        <div className="panel panel-default">
            <div className="panel-header">
                <h2>Search Results Here</h2>
            </div>
            <div className="panel-body">
                {props.articles.map((article, i) => (
                    <div>
                       <h3>{article.headline.main}</h3>
                       <p>{article.multimedia.snippet}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>

)

export default Results;