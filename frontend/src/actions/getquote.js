export const GET_QUOTE = 'GET_QUOTE';

export const getquote = () => {
    return function(dispatch){
        return fetch('http://localhost:2021/quote'
        ).then(
            response => response.json(),
            error => console.log(error),
        ).then((json)=> {
            console.log(json);
            dispatch({type: GET_QUOTE, data: json})
        })
    }
}