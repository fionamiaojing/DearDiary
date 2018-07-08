import { combineReducers } from 'redux';
import { ideas, story } from './items';
import { moodvalue } from './value';

const allReducers = combineReducers({
    ideas: ideas,
    story: story,
    moodvalue: moodvalue
});

export default allReducers;