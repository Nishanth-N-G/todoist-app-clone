
import { createStore } from 'redux'
import { combineReducers } from 'redux'

// const storeRedux = (state = { selectedTab: "INBOX", showAddTask: false, task: '', tasks: [], date: new Date() }, action) => {
//     if (action.type === 'INBOX') {
//         return { ...state, selectedTab: "INBOX" };
//     }
//     if (action.type === 'TODAY') {
//         return { ...state, selectedTab: "TODAY" };
//     }
//     if (action.type === 'NEXT_7') {
//         return { ...state, selectedTab: "NEXT_7" };
//     }
//     if (action.type === 'ToggleAddTask') {
//         return { ...state, showAddTask: !state.showAddTask };
//     }
//     if (action.type === 'CancelAddTask') {
//         return { ...state, showAddTask: !state.showAddTask, task: '' };
//     }
//     if (action.type === 'TASK') {
//         return { ...state, task: action.payload };
//     }
//     if (action.type === 'ADDNEWTASK') {
//         return { ...state, showAddTask: !state.showAddTask, tasks: [...state.tasks, action.payload], task: '' };
//     }
//     if (action.type === 'DateChange') {
//         return { ...state, date: action.payload };
//     }
//     return state;
// }

const selectedTabReducer = (state = { selectedTab: "INBOX" }, action) => {
    if (action.type === 'INBOX') {
        return { ...state, selectedTab: "INBOX" };
    }
    if (action.type === 'TODAY') {
        return { ...state, selectedTab: "TODAY" };
    }
    if (action.type === 'NEXT_7') {
        return { ...state, selectedTab: "NEXT_7" };
    }
    return state;
}

const showAddTaskReducer = (state = { showAddTask: false }, action) => {
    if (action.type === 'ToggleAddTask') {
        return { ...state, showAddTask: !state.showAddTask };
    }
    if (action.type === 'CancelAddTask') {
        return { ...state, showAddTask: !state.showAddTask };
    }
    if (action.type === 'ADDNEWTASK') {
        return { ...state, showAddTask: !state.showAddTask };
    }
    return state;
}

const taskReducer = (state = { task: '' }, action) => {
    if (action.type === 'CancelAddTask') {
        return { ...state, task: '' };
    }
    if (action.type === 'TASK') {
        return { ...state, task: action.payload };
    }
    if (action.type === 'ADDNEWTASK') {
        return { ...state, task: '' };
    }
    return state;
}

const tasksReducer = (state = { tasks: [] }, action) => {
    if (action.type === 'ADDNEWTASK') {
        return { ...state, showAddTask: !state.showAddTask, tasks: [...state.tasks, action.payload], task: '' };
    }
    return state;
}

const dateReducer = (state = { date: new Date() }, action) => {
    if (action.type === 'DateChange') {
        return { ...state, date: action.payload };
    }
    if (action.type === 'ADDNEWTASK') {
        return { ...state, date: new Date() };
    }
    if (action.type === 'CancelAddTask') {
        return { ...state, date: new Date() };
    }
    return state;
}

const storeRedux = combineReducers({
    selectedTab: selectedTabReducer,
    showAddTask: showAddTaskReducer,
    task: taskReducer,
    tasks: tasksReducer,
    date: dateReducer
})

const store = createStore(storeRedux)

export default store