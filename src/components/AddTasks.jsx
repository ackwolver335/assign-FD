import React,{ useContext, useState } from 'react'
import taskContext from '../context/task/taskContext'

export default function AddTasks() {

    // method for creating a new Task
    const { createTask } = useContext(taskContext);

    // task state for addition of a new task
    const [task, setTask] = useState({ title: '', description: '',category: '' });
    
    // form showing state
    const [showForm, setShowForm] = useState(false);

    // handlEvent for creating a task
    const handleTask = () => setShowForm(true);
    
    // defining method for sending the data to the backend
    const submitForm = (e) => {
        e.preventDefault();

        createTask(task.title,task.description,task.category);
        setShowForm(false);
        setTask({ id: '', title: '', description: '',category: '' });
    }

    // method for clearing all the data at once
    const clearAllEntries = () => setTask({ id: '', title: '', description: '',category: '' });

  return (
    <div className="pb-36 sm:pb-40 md:pb-52 lg:pb-60 pt-5 flex items-center justify-center">
    
        <button onClick={handleTask} className="w-fit px-3 py-1 lg:py-2 text-white bg-navBG rounded-md lg:rounded-lg cursor-pointer font-gg font-semibold text-sm lg:text-base md:text-base ease-in duration-150 active:scale-90"> Add Tasks </button>

        <form className={`bottom-5 ${showForm ? '' : 'translate-y-125'} sm:bottom-10 w-4/5 sm:w-2/3 md:w-2/4 lg:w-2/5 xl:w-2/6 left-5 sm:left-10 p-4 shadow-lg lg:shadow-xl rounded-sm sm:rounded-md lg:rounded-lg bg-white z-50 fixed flex flex-col items-center gap-3 lg:gap-5 xl:gap-4 ease-in duration-350`}>

            <div className="flex flex-row justify-between items-center w-full">
                <h3 className="sm:text-lg font-poppins font-semibold"> Update Task </h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x-square-fill w-5 sm:w-6 text-navBG cursor-pointer" viewBox="0 0 16 16" onClick={() => setShowForm(false) }>
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
