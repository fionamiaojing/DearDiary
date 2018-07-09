
export const ideas = (state = [], action) => {
    switch (action.type) {
        case 'ADD_IDEA':
            return [
                ...state,
                {key: action.payload.idea}
            ];
        case 'DELETE_IDEA':
            return state.filter(
                (obj) => obj.id !== action.payload.ideaid
            );
        case 'FETCH_IDEAS':
            return action.payload.ideas.map(
                (ele) => {
                    return {
                        id: ele[0],
                        key: ele[1]};
                });
        default:
            return state;
    }
};

export const story = (state = '', action) => {
    switch (action.type) {
        case 'CHANGE_STORY':
            return action.payload.story;
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


