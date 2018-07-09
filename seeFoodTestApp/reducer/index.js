import { combineReducers } from 'redux';
import { ideas, story, show } from './items';
import { moodvalue, date } from './value';

const allReducers = combineReducers({
    ideas: ideas,
    story: story,
    moodvalue: moodvalue,
    show: show,
    date: date
});

export default allReducers;