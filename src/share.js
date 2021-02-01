import axios from './axios';
export const sortData = (results) => {
    const data = results.sort((a,b) => {
        return a.time.localeCompare(b.time)
    }).slice(0, 3)

    return data
}

export function fetchData(url, isAuth, userId, getResults) {
    axios.get(url)
        .then(res => {

            let fetchedResults = [];
            let easyTime = [];
            let hardTime = [];
            for (let key in res.data) {
                fetchedResults.push({
                    ...res.data[key],
                    key: key
                });
            };

            if(isAuth) {
                fetchedResults = fetchedResults.filter(e => {
                    return e.customer.id === userId
                })
            }

            easyTime = fetchedResults.filter(e => {
                return e.level;
            }).sort((a, b) => {
                return ('' + a.time).localeCompare(b.time);
            }).slice(0, 3);
            hardTime = fetchedResults.filter(e => {
                return !e.level;
            }).sort((a, b) => {
                return ('' + a.time).localeCompare(b.time);
            }).slice(0, 3);

            fetchedResults = easyTime.concat(hardTime);
            getResults(fetchedResults);

        })
        .catch(err => {
            console.log(err);
        });
}
