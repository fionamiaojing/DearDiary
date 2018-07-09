
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
            console.log(action.payload.ideas);
            return action.payload.ideas.map(
                (idea) => {
                    return {key: idea};
                });
        default:
            return state;
    }
};

export const story = (state = [], action) => {
    switch (action.type) {
        case 'ADD_Story':
        return [
            ...state,
            {key: action.payload.story}
        ];
        default:
            return state;
    }
};

export const show = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_SHOW':
            return action.payload.bool;
        default:
            return state;
    }
};


