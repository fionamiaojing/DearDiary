
export const ideas = (state = [], action) => {
    switch (action.type) {
        case 'ADD_IDEA':
            return [
                ...state,
                {key: action.payload.idea}
            ];
        case 'DELETE_IDEA':
            return state.filter(
                (obj) => obj.key !== action.payload.idea
            );
        case 'FETCH_IDEAS':
            return action.payload.ideas;
        default:
            return state;
    }
};

export const story = (state = [], action) => {
    switch (action.type) {
        case 'ADD_Story':
            return action.payload.story;
        default:
            return state;
    }
};

