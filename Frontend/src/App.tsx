import { Route, Router, Routes } from 'react-router-dom'
import DashBoard from './pages/DashBoard'
import Customers from './pages/Customers'
import Settings from './pages/Settings'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/customers" element={<Customers />} />
    </Routes>
  )
}

export default App