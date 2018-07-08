
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

export const changeMood = (value) => {
    return {
        type: 'CHANGE_MOOD',
        payload: {
            value: value
        }
    };
};

const defaultidea = [
    {key: 'learn aaa'},
    {key: 'learn bbb'},
    {key: 'learn ccc'}
];