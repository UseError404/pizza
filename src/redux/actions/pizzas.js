import axios from "axios";

export const setLoaded = (payload) => ({
    type: "SET_LOADING",
    payload,
})

//асинхронный экшен
// метод для получения и сохранения  данных
export const fetchPizzas = () => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get('http://localhost:3000/pizzas').then((resp) => {
        dispatch(setPizzas(resp.data))
    })
}

// метод для сохранения данных
export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
})