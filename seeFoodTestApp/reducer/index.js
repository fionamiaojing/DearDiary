import { combineReducers } from 'redux';
import { ideas, story, show } from './items';
import { moodvalue, date, userid } from './value';

const allReducers = combineReducers({
    ideas: ideas,
    story: story,
    moodvalue: moodvalue,
    show: show,
    date: date,
    userid: userid
});

export default allReducers;