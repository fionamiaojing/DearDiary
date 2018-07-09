
export const addIdeas = (idea) => {
    return {
        type: 'ADD_IDEA',
        payload: {
            idea: idea
        }
    };
};

export const deleteIdeas = (idea) => {
    return {
        type: 'DELETE_IDEA',
        payload: {
            idea: idea
        }
    };
};

export const fetchIdeas = (ideas) => {
    return {
        type: 'FETCH_IDEAS',
        payload: {
            ideas: ideas
        }
    };
};

export const fetchAllIdeas = (userid, date) => {
    //dispatch fetchIdeas
    //set data
    return function(dispatch) {
        dispatch(fetchIdeas(defaultidea));
    };
};

export const postNewIdea = (userid, data, idea) => {
    //post to remote
    return function(dispatch) {
        dispatch(addIdeas(idea));
    };
};

export const toggleShow = (bool) => {
    return {
        type: 'TOGGLE_SHOW',
        payload: {
            bool: bool
        }
    };
};

export const changeMood = (value) => {
    return {
        type: 'CHANGE_MOOD',
        payload: {
            value: value
        }
    };
};

export const fetchMood = () => {
    return function(dispatch) {
        dispatch(changeMood(0.5));
    };
};

//can also directly post to server in components
export const saveMood = (value) => {
    //post to server
    return function(dispatch) {
        dispatch(changeMood(value));
    };
};


const defaultidea = [
    'learn aaa',
    'learn bbb',
    'learn ccc'
];