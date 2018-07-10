export const moodvalue = (state = 0.5, action) => {
    switch (action.type) {
        case 'CHANGE_MOOD':
            return action.payload.value;
        default:
            return state;
    }
};

export const date = (state=new Date().toDateString(), action) => {
    switch (action.type) {
        case 'SELECT_DATE':
            return action.payload.date;
        default:
            return state;
    }
};

export const userid = (state='Fiona', action) => {
    switch (action.type) {
        case 'CHANGE_USERID':
            return action.payload.userid;
        case 'ENTER_USERID':
            return action.payload.userid;
        default:
            return state;
    }
};

export const password = (state='123456', action) => {
    switch (action.type) {
        case 'CHANGE_PASSWORD':
            return action.payload.password;
        case 'ENTER_PASSWORD':
            return action.payload.password;
        default:
            return state;
    }
};