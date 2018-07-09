export const moodvalue = (state = 0.5, action) => {
    switch (action.type) {
        case 'CHANGE_MOOD':
            return action.payload.value;
        default:
            return state;
    }
};

export const date = () => {
    return new Date().toDateString();
};

export const userid = () => {
    return 'fiona';
};