import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Newsletter from './Newsletter';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}
