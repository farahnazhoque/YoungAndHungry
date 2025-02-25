import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Newsletter from './Newsletter';
import Layout from './Layout';
import About from './About';
import Podcast from './Podcast';
import Forum from './Forum';
import Login from './Login';
import SignUp from './SignUp';
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/forum" element={<Forum />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Route>
    </Routes>
  );
}
