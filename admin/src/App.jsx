import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Sidebar from "../src/components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Resource from "./pages/Resource";
import AddResource from "./pages/AddResource";
import MaterialRequest from "./pages/MaterialRequest";
function App() {
  return (
    
    <BrowserRouter>
    <div className="flex">
    <Sidebar />
      <Routes>
      
        <Route path="/" element={<Dashboard />}/>
          <Route path="/resource" element={<Resource />} />
          <Route path="/addResource" element={<AddResource />} />
          <Route path="/materialRequest" element={<MaterialRequest />} />
        
      </Routes>
      {/* <Dashboard /> */}
      {/* <Resource /> */}
      {/* <AddResource /> */}
      {/* <MaterialRequest /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;