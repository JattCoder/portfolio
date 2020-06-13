export const UPDATE_LIKE = 'UPDATE_LIKE';

export const updateLike = () => {
    return function(dispatch){
        let data = {likes: 1}
        return fetch('http://localhost:2021/home', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(
            response => response.json(),
            error => console.log(error),
        ).then((json)=> {
            console.log(json);
            dispatch({type: UPDATE_LIKE, data: json})
        })
    }
}
