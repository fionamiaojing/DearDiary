
export const addIdeas = (idea) => {
    return {
        type: 'ADD_IDEA',
        payload: {
            idea: idea
        }
    };
};

export const deleteIdeas = (ideaid) => {
    return {
        type: 'DELETE_IDEA',
        payload: {
            ideaid: ideaid
        }
    };
};

export const deleteIdea = (ideaid) => {
    //dispatch fetchIdeas
    //set data
    return function(dispatch) {
        fetch(`${url}/ideas/${ideaid}`, {
            method: 'DELETE'
        })
          .then(
              dispatch(deleteIdeas(ideaid))
        )
          .catch((error) => {
            throw error;
        });
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
    return function(dispatch) {
        fetch(`${url}/ideas/${userid}/${date}`)
          .then((response) => response.json())
          .then((responseJson) => {
              let ideas = responseJson.map((obj) => {
                  return [obj._id, obj.idea];
              });
            dispatch(fetchIdeas(ideas));
          })
          .catch((error) => {
            throw error;
        });
    };
};

export const postNewIdea = (userid, date, idea) => {
    return function(dispatch) {
        fetch(`${url}/ideas/${userid}/${date}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                idea: idea,
            }),
        })
          .then(
              dispatch(addIdeas(idea))
        )
          .catch((error) => {
            throw error;
        });
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

export const fetchMood = (userid, date) => {
    return function(dispatch) {
        fetch(`${url}/mood/${userid}/${date}`)
          .then((response) => response.json())
          .then((responseJson) => {
            let moodvalue = responseJson.length > 0 ? 
                responseJson[0].moodvalue : 0.5;
            dispatch(changeMood(moodvalue));
          })
          .catch((error) => {
            throw error;
        });
    };
};

export const saveMood = (userid, date, value) => {
    return function(dispatch) {
        fetch(`${url}/mood/${userid}/${date}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                value: value,
            }),
        })
          .then(
              dispatch(changeMood(value))
        )
          .catch((error) => {
            throw error;
        });
    };
};

export const fetchStory = (userid, date) => {
    return function(dispatch) {
        fetch(`${url}/stories/${userid}/${date}`)
            .then((response) => response.json())
            .then((responseJson) => {
                //array
                let story = responseJson.length === 0 ? '' : responseJson[0].story;
                dispatch(changeStory(story));
            })
            .catch((error) => {
                throw error;
            });
    };
};

export const postStory = (userid, date, story) => {
    return function(dispatch) {
        fetch(`${url}/stories/${userid}/${date}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                story: story,
            }),
        })
          .then(
              dispatch(changeStory(story))
        )
          .catch((error) => {
            throw error;
        });
    };
};

export const changeStory = (story) => {
    return {
        type: 'CHANGE_STORY',
        payload: {
            story: story
        }
    };
};

export const enterUserID = (userid) => {
    return {
        type: 'ENTER_USERID',
        payload: {
            userid: userid
        }
    };
};

export const changeUserID = (userid) => {
    return {
        type: 'CHANGE_USERID',
        payload: {
            userid: userid
        }
    };
};

export const enterPassword = (password) => {
    return {
        type: 'ENTER_PASSWORD',
        payload: {
            password: password
        }
    };
};

export const changePassword = (password) => {
    return {
        type: 'CHANGE_PASSWORD',
        payload: {
            password: password
        }
    };
};

export const selectDate = (date) => {
    return {
        type: 'SELECT_DATE',
        payload: {
            date: date
        }
    };
};

const url1 = 'http://10.7.77.106:3000';
//const url1 = 'http://192.168.1.11:3000';
const url = 'https://deardiary-209622.appspot.com';
//`/mood/${userid}/${date}`
