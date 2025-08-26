import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import GoalsLayout from '../layout/GoalsLayout'
import Sidebar from '../components/Sidebar/Sidebar'

function AppRoutes() {
  return (
    <BrowserRouter>
      <div className='flex'>
        <Sidebar/>
        <Routes>
            <Route path="/" element={<MainLayout/>} />
            <Route path="/user" element={<GoalsLayout/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default AppRoutes