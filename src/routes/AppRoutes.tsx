import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes