import { createStore } from 'redux';
import { allReducers } from '../reducer/reducer';

export const store = createStore(allReducers);