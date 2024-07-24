import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import Customers from './pages/Customers';
import Settings from './pages/Settings';
import Customer from './pages/Customer';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/customer/:id" element={<Customer />} />
    </Routes>
  );
}

export default App;
