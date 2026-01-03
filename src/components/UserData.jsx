import React, { useContext, useEffect, useState } from 'react'
import taskContext from '../context/task/taskContext'

export default function UserData() {

    // different methods from task content regarding different operations
    const { tasks, getUserTasks, updateTask, deleteTask } = useContext(taskContext);

    // state regarding storing tasks
    const [task, setTask] = useState({ id: '', title: '', description: '',category: '' });

    // method for getting or setting details of current task in the Update Task form
    const handleCurrentTask = (currentTask) => {
        setTask({ id : currentTask._id, title : currentTask.title, description : currentTask.description, category: currentTask.category});
        document.querySelector('.updateForm').classList.remove('translate-y-125');
    }

    // method for updating the task and its values 
    const submitForm = (e) => {
        e.preventDefault();

        updateTask(task.id,task.title,task.description,task.category);
        document.querySelector('.updateForm').classList.add('translate-y-125');
        setTask({ id: '', title: '', description: '',category: '' });
    }

    // method for clearing all the data at once
    const clearAllEntries = () => setTask({ id: '', title: '', description: '',category: '' });

    useEffect(() => {
        getUserTasks();
    },[])
    
  return (
    <div className={`pt-0 lg:py-10 px-6 lg:px-12 xl:px-30 flex flex-col ${tasks.length == 0 ? '' : 'lg:grid lg:grid-cols-2 lg:gap-x-10 xl:gap-x-20 lg:gap-y-6 xl:gap-y-10'} justify-center gap-3 sm:gap-5 items-center`}>
      
        {tasks.length == 0 ?

            <h3 className="text-sm sm:text-lg text-center font-poppins font-semibold text-navBG"> No Task Available, Please add some ! </h3>
        
            : 

            tasks.map((task) => {
            return (<div key={task._id} className="flex flex-col w-4/5 sm:w-2/3 lg:w-full items-start py-3 px-4 gap-1 bg-navBG/80 rounded-md">
                
                <div className="flex flex-row items-center justify-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-card-heading w-5 text-white" viewBox="0 0 16 16">
                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                        <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    <h3 className="sm:text-lg font-poppins font-semibold text-white"> {task?.title} </h3>
                </div>

                <p className="text-sm font-gg font-semibold text-white"> {task?.description} </p>

                <p className="text-sm font-gg font-semibold text-white"> Category : {task?.category} </p>

                <div className="flex flex-row items-center justify-start gap-2 lg:gap-3 pt-3 py-1">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-pencil-square w-5 text-white cursor-pointer" viewBox="0 0 16 16" onClick={() => handleCurrentTask(task)}>
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-trash3 cursor-pointer w-5 text-white" viewBox="0 0 16 16" onClick={() => deleteTask(task._id)}>
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                    </svg>

                </div>

            </div>)
            })

        }

        <form className="updateForm bottom-5 translate-y-125 sm:bottom-10 w-4/5 sm:w-2/3 md:w-2/4 lg:w-2/5 xl:w-2/6 right-5 sm:right-10 p-4 shadow-lg lg:shadow-xl rounded-sm sm:rounded-md lg:rounded-lg bg-white z-50 fixed flex flex-col items-center gap-3 lg:gap-5 xl:gap-4 ease-in duration-350">

            <div className="flex flex-row justify-between items-center w-full">
                <h3 className="sm:text-lg font-poppins font-semibold"> Update Task </h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x-square-fill w-5 sm:w-6 text-navBG cursor-pointer" viewBox="0 0 16 16" onClick={() => { document.querySelector('.updateForm').classList.add('translate-y-125') }}>
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
                </svg>
            </div>

            {/* task's title */}
            <div className="flex flex-col items-start w-full gap-1 lg:gap-2 xl:gap-3">
                <label htmlFor="" className="text-[12px] font-poppins font-semibold text-navBG"> Task Title </label>
                <input type="text" placeholder="Your Task Title.." value={task.title} onChange={(e) => { setTask(prev => ({ ...prev, title : e.target.value })) }} className="font-gg font-semibold text-base border border-navBG focus:outline-0 w-full rounded-sm md:rounded-md focus:rounded-xl px-3 py-1 ease-in duration-150" required />
            </div>

            {/* task's Descrption */}
            <div className="flex flex-col items-start w-full gap-1 lg:gap-2 xl:gap-3">
                <label htmlFor="" className="text-[12px] font-poppins font-semibold text-navBG"> Task Description </label>
                <textarea type="text" rows={3} placeholder="Your task's description..." value={task.description} onChange={(e) => { setTask(prev => ({ ...prev, description : e.target.value })) }} className="font-gg font-semibold resize-none text-base border border-navBG focus:outline-0 w-full rounded-sm md:rounded-md focus:rounded-xl px-3 py-1 ease-in duration-150" required> </textarea>
            </div>

            {/* task's Category */}
            <div className="flex flex-col items-start w-full gap-1 lg:gap-2 xl:gap-3">
                <label htmlFor="" className="text-[12px] font-poppins font-semibold text-navBG"> Task Category </label>
                <select type="text" placeholder="Your task's description..." value={task.category} onChange={(e) => { setTask(prev => ({ ...prev, category : e.target.value })) }} className="font-gg font-medium resize-none text-base border border-navBG focus:outline-0 w-full rounded-sm md:rounded-md px-3 py-1 ease-in duration-150">
                    <option> Public </option>
                    <option> Private </option>
                </select>
            </div>

            <div className="flex flex-row items-center justify-start w-full gap-2 lg:gap-3">
                <button type="submit" onClick={submitForm} className="w-fit px-3 py-1 lg:py-2 text-white bg-navBG rounded-md lg:rounded-lg cursor-pointer font-gg font-semibold text-sm md:text-base ease-in duration-150 active:scale-90"> Update </button>
                <button onClick={clearAllEntries} className="w-fit px-3 py-1 lg:py-2 text-white bg-navBG rounded-md lg:rounded-lg cursor-pointer font-gg font-semibold text-sm md:text-base ease-in duration-150 active:scale-90"> Clear Data </button>
            </div>

        </form>

    </div>
  )
}
