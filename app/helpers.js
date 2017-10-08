import axios from "axios";

export default {
    runSearch(data, callback) {
        let apiKey = "49e3ff1e8fc14502b562246858f7e704";
        let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}`;
        
        if (!data.keyword) return;

        if (data.startYear) 
            url += `&begin_date=${data.startYear}`;
        
        if (data.endYear) 
            url += `&end_date=${data.endYear}`;
        
        url += `&q=${data.keyword}`;
        
        axios.get(url).then(res => {
            let results = res.data.response.docs;
            callback(results);
        })
    }
}