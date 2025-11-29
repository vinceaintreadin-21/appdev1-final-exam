import axios from 'axios'

export const getTodosAPI = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/todos?_limit=10`)
        console.log(res.data)
        return res.data
    } catch (err) {
        console.error('Error fetching todos:', err)
         throw err
    }
}

export const addTodoAPI = async (todo) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_APP_API_URL}/todos`, todo, {
            headers: { 'Content-Type': 'application/json'}
        })

        console.log('Added Todo task in the List', res.data)
        return res.data
    } catch (err) {
        console.error('Error on adding todo task into the list', err)
        throw err
    }
}

export const updateTodoAPI = async (todo) => {
    try {
        const res = await axios.put(`${import.meta.env.VITE_APP_API_URL}/todos/${todo.id}`, todo, {
            headers: { 'Content-Type': 'application/json'}
        })

        console.log('Updated Todo task', res.data)
        return res.data
    } catch (err) {
        console.error('Error on updating todo task into the list', err)
        throw err
    }
}

export const deleteTodoAPI = async (id) => {
    try {
        await axios.delete(`${import.meta.env.VITE_APP_API_URL}/todos/${id}`)
        console.log('deleted task successfully')
        return id
    } catch (err) {
        console.error('Error on deleting todo task into the list', err)
        throw err
    }
}
