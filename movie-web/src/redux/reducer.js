

// Global State
const globalState = {
    search: '',
    movies: []
}
// Reducer
const reducer = (state = globalState, action) => {
    if(action.type === 'Searching'){
        return {
            ...state,
            search: action.data
        }
    } 
    if(action.type === 'getMovieData'){                                    
        return{
            ...state,
            movies: action.data
        }
        
    } 
    return state;
}

export default reducer