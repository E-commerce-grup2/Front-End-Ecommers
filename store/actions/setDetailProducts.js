import axios from 'axios'

export const fetchDetailProducts = () => {
    return (dispatch) => {
        const getToken = localStorage.getItem('token')
        axios.get('http://18.136.193.63:8081/products/', {
            headers: { Authorization: `Bearer ${getToken}` }
        })
            .then(({ data }) => {
                // console.log(data);
                dispatch(setPost(data.data))
            })
            .catch(err => {
                console.log(err.response);
            })
    }
}

export const setPost = (payload) => {
    return {
        type: "SET_DETAIL", payload
    }
}