import { createStore } from 'redux';
import { allReducers } from '../reducer/all.reducer';

export const store = createStore(allReducers);