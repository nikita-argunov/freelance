import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { PProject, Project, ProjectState } from './types';
import { BASE_URL } from '../../utils';

// Дефолтные значения
const initialState: ProjectState = {
    projects: [],
};

export const fetch = createAsyncThunk('project/fetch', async () => {
    const data = await axios.get(BASE_URL + '/projects');
    return data.data;
});

export const create = createAsyncThunk('project/register', async (object: PProject) => {
    const data = await axios.post(BASE_URL + '/projects', object);
    return data.data;
});

export const edit = createAsyncThunk('project/edit', async (object: Project) => {
    const data = await axios.put(BASE_URL + '/projects' + '/' + object.id, object);
    return data.data;
});

export const remove = createAsyncThunk('project/delete', async (userId: number) => {
    const data = await axios.delete(BASE_URL + '/projects' + '/' + userId);
    return data.data;
});

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        // функции обработчики (микротаски)
    },
    extraReducers(builder) {
        builder
            .addCase(fetch.fulfilled, (state, action) => {
                state.projects = action.payload;
            })
            .addCase(edit.fulfilled, (state, action) => {
                state.projects = state.projects.map(user => {
                    if (user.id === action.payload.id) {
                        return action.payload;
                    }

                    return user;
                });
            })
            .addCase(remove.fulfilled, (state, action) => {
                state.projects = state.projects.filter(user => user.id !== action.payload.id);
            });
    },
});

export const {} = projectSlice.actions;

export default projectSlice.reducer;
