// Include the Main React Dependencies
import React, {Component} from "react";
import helpers from "../helpers";
// Include the main Child Components
import Search from "./Search";
import Results from "./Results";
import Saved from "./Saved";

// construct Main components

class Main extends Component {  

    constructor() {
        super();
        this.state = {
            keyword: '',
            startYear: '',
            endYear: '',
            articles: []
        }
    }
    
    onChange(e) {
        let prop = e.target.id;
        let update = {};
        update[prop] = e.target.value;
        this.setState(update);
    }

    getArticles(e) {
        e.preventDefault()
        helpers.runSearch({
            keyword: this.state.keyword,
            startYear: this.state.startYear,
            endYear: this.state.endYear
        }, results => {
            this.setState({
                articles: results
            })
        })
    }
   
    render() {

        return(
        <div>
            <div className="jumbotron">
                <h1>Welcome to the New York Times Article Retriever</h1>
            </div>
        
            <Search 
                getArticles={this.getArticles.bind(this)} 
                onChange={this.onChange.bind(this)}
                keyword={this.state.keyword}
                startYear={this.state.startYear}
                endYear={this.state.endYear}

            />

            <Results 
                articles={this.state.articles}
            
            />

            <Saved />
        </div>
        );
    } 

}
module.exports = Main;