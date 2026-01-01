// required packages and their methods
import { Routes, Route } from "react-router-dom";

import "./App.css";

// requried pages
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from './pages/SignUp'

// required components
import UserTasks from "./pages/UserTasks";

// contexts for using Alerts and User Data transfers
import AlertState from "./context/alert/AlertState";
import TaskState from "./context/task/TaskState";

function App() {
    return (
        <>
            <AlertState>
                <TaskState>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/usertask" element={<UserTasks />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>

                </TaskState>
            </AlertState>
        </>
    );
}

export default App;
