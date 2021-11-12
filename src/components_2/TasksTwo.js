import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import dateFnsFormat from "date-fns/format";
import { addDays, isAfter, isBefore, isToday } from 'date-fns';

const FORMAT = 'dd/MM/yyyy';
function formatDate(date, format, locale) {
    return dateFnsFormat(date, format, { locale });
}

const AddTask = () => {
    const task = useSelector(state => state.task.task);
    const date = useSelector(state => state.date.date);
    // console.log(tasks);
    const dispatch = useDispatch();
    console.log(task);

    const taskInput = (singleTask) => {
        dispatch({ type: 'TASK', payload: singleTask })
        // console.log(singleTask);
    }

    const addNewTask = (taskToAdd, taskdate) => {
        const TaskDateItem = { newTask: taskToAdd, newDate: taskdate || new Date() }
        console.log(TaskDateItem);
        dispatch({ type: 'ADDNEWTASK', payload: TaskDateItem })
    }

    return (
        <div className="add-task-dailog">
            <input className="" value={task || ''} onChange={(e) => taskInput(e.target.value)} />
            <div className="add-task-action-container">
                <div className="btns-container">
                    <button className="add-btn" onClick={() => addNewTask(task, date)}>Add task</button>
                    <button className="cancel-btn" onClick={() => dispatch({ type: 'CancelAddTask' })}>Cancel</button>
                </div>
                <div className="icon-container">
                    <DayPickerInput
                        onDayChange={(day) => dispatch({ type: 'DateChange', payload: day })}
                        placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
                        formatDate={formatDate}
                        format={FORMAT}
                        dayPickerProps={{
                            modifiers: {
                                disabled: [{ before: new Date() }],
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

const TaskItems = () => {
    const tasks = useSelector(state => state.tasks.tasks);
    const selectedTab = useSelector(state => state.selectedTab.selectedTab);
    if (selectedTab === "NEXT_7") {
        return tasks.filter((task) =>
            isAfter(task.newDate, new Date()) && isBefore(task.newDate, addDays(new Date(), 7)))
            .map((task) => (<p>{task.newTask}  {dateFnsFormat(new Date(task.newDate), FORMAT)} {" "}</p>));
    }

    if (selectedTab === "TODAY") {
        return tasks.filter((task) =>
            isToday(task.newDate))
            .map((task) => (<p>{task.newTask}  {dateFnsFormat(new Date(task.newDate), FORMAT)} {" "}</p>));
    }

    return tasks
        .map((task) => (<p>{task.newTask}  {dateFnsFormat(new Date(task.newDate), FORMAT)} {" "}</p>));
}

function TasksTwo() {
    const showAddTask = useSelector(state => state.showAddTask.showAddTask);
    const tasks = useSelector(state => state.tasks.tasks);
    const selectedTab = useSelector(state => state.selectedTab.selectedTab);
    console.log(tasks);
    const dispatch = useDispatch();

    return (
        <div className="tasks">
            <h1>{selectedTab}</h1>
            {selectedTab === 'INBOX' ?
                <div className="add-task-btn" onClick={() => dispatch({ type: 'ToggleAddTask' })}>
                    <span className="plus">+</span>
                    <span className="add-task-text">Add Task</span>
                </div> : null}
            {showAddTask && <AddTask />}
            {tasks.length > 0 ?
                // tasks.map((task) =>
                //     <p>
                //         {task.newTask}
                //         {" "}
                //         {`${task.newDate.getDate()} / ${task.newDate.getMonth()} / ${task.newDate.getFullYear()}`}
                //     </p>
                <TaskItems />
                : <p>No tasks yet</p>
            }
        </div>
    )
}

export default TasksTwo
