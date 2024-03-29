const initialState = {
    data: []
}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                data: [...state.data, action.message]
            };
        case "DELETE_TODO":
            return {
                ...state,
                data: [...state.data.filter((todo) => todo.id !== action.id)]
            };
        case "UPDATE_TODO":
            return {
                ...state,
                data: [...state.data.filter((todo) => todo.id !== action.id), 
                {task: action.message, id: action.id}]
            };
        default:
            return state;
    }
}

export default todos;