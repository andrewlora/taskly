import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import CreateTask from './pages/CreateTask';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SingleTask from './pages/SingleTask';
import Tasks from './pages/Tasks';
import UpdateTask from './pages/UpdateTask';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Toaster position="bottom-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-task" element={<CreateTask />} />
          <Route path="/update-task" element={<UpdateTask />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/task/:id" element={<SingleTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
