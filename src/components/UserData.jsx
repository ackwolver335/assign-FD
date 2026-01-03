import React, { useContext, useEffect, useState } from 'react'
import taskContext from '../context/task/taskContext'
import alertContext from '../context/alert/alertContext';

export default function UserData() {

    // alert regarding different status
    const {showAlert} = useContext(alertContext);

    // different methods from task content regarding different operations
    const { tasks, getUserTasks, updateTask, deleteTask } = useContext(taskContext);

    // state regarding storing tasks
    const [task, setTask] = useState({ id: '', title: '', description: '',category: '' });

    useEffect(() => {
        getUserTasks();
    },[])
    

  return (
    <div className={`pb-36 sm:pb-40 md:pb-52 lg:pb-60 pt-0 lg:py-10 px-6 lg:px-12 xl:px-30 flex flex-col ${tasks.length == 0 ? '' : 'lg:grid lg:grid-cols-2 lg:gap-x-10 xl:gap-x-20 lg:gap-y-6 xl:gap-y-10'} justify-center gap-3 sm:gap-5 items-center`}>
      
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

                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-pencil-square w-5 text-white cursor-pointer" viewBox="0 0 16 16">
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

        <form className="bottom-5 right-5 px-4 py-2 shadow-lg lg:shadow-xl rounded-sm sm:rounded-md lg:rounded-lg bg-white z-50 fixed">



        </form>

    </div>
  )
}
