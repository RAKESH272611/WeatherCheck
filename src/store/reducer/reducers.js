const initialState = {
    weatherData: null
};

const rootReducer = (state = initialState,action) => {
    switch(action.type){
        case 'SET_WEATHER_DATA':
            return{
                ...state,
                weatherData: action.payload
            };
        default:
            return state;
    }
}

export default rootReducer;