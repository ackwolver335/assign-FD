import React, { useState, useContext } from 'react'

import taskContext from './taskContext'
import alertContext from '../alert/alertContext'

export default function TaskState(props){

    // backend API-URL
    const host = import.meta.env.VITE_API_URL;

    // an array for all tasks
    const taskInitial = [];

    // setting alert methods
    const { showAlert } = useContext(alertContext);

    // state for all tasks
    const [tasks,setTasks] = useState(taskInitial);

    // 1. Fetching all users tasks
    const getUserTasks = async () => {
        const response = await fetch(`${host}/api/tasks/getuserdata`,{
            method: 'GET',
            headers: {
                'Content-type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            },
        });

        const json = await response.json();
        if(json.success){
            showAlert(true,'Success','Tasks Fetched Successfully !');
            setTasks(json.tasks);
        } else showAlert(true,'Danger', Array.isArray(json.result) && json.result.length > 0 ? json.result[0].msg : json.message)
    }

    // 2. Creating a user's task
    const createTask = async (title, description, category) => {
        const response = await fetch(`${host}/api/tasks/createtask`,{
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, category })
        });

        const json = await response.json();
        if(json.success){
            showAlert(true,'Success','Task added Successfully !');
            setTasks(tasks.concat(json.savedTasks));
        } else showAlert(true,'Danger', Array.isArray(json.result) && json.result.length > 0 ? json.result[0].msg : json.message);
    }

    // 3. Updating already existing user's task
    const updateTask = async (id, title, description, category) => {
        const response = await fetch(`${host}/api/tasks/updatetask/${id}`,{
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, category }) 
        });

        const json = await response.json();
        if(json.success){
            showAlert(true,'Success','Task Updated Successfully !');
            setTasks(prevTasks => prevTasks.map(task => task._id === json.task._id ? json.task : task));
        } else showAlert(true,'Danger', Array.isArray(json.result) && json.result.length > 0 ? json.result[0].msg : json.message);
    }

    // 4. Deleting a particular task
    const deleteTask = async (id) => {
        const response = await fetch(`${host}/api/tasks/deletetask/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            }
        });

        const json = await response.json();
        if(json.success){
            showAlert(true,'Success','Task Deleted Successfully !');
            const newTasks = tasks.filter((task) => { return task._id !== id });
            setTasks(newTasks);
        } else showAlert(true,'Danger', Array.isArray(json.result) && json.result.length > 0 ? json.result[0].msg : json.message);
    }

    // 5. Public Category of Tasks
    const publicTasks = async () => {
        const response = await fetch(`${host}/api/tasks/publictasks`,{
            method: 'GET',
            headers: {
                'Content-type' : 'application/json'
            }
        });

        const json = await response.json();
        if(json.success){
            showAlert(true,'Success','Public Tasks fetched Successfully !')
            setTasks(json.tasks);
        } else showAlert(true,'Danger', Array.isArray(json.result) && json.result.length > 0 ? json.result[0].msg : json.message);
    }

    return (
        <taskContext.Provider value={{ tasks, getUserTasks, createTask, updateTask, deleteTask, publicTasks }}>
            {props.children}
        </taskContext.Provider>
    )
}