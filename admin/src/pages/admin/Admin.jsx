'../../components/navbar/Navbar'
import AddProduct from '../../components/addproduct/AddProduct';
import List from '../../components/list/List'
import Sidebar from '../../components/sidebar/Sidebar'
import './Admin.css'
import {Routes,Route} from 'react-router-dom';

const Admin = () => {
  return (
    <div className="admin">
        <Sidebar />
        <Routes>
          <Route path='/api/product/addproduct' element={<AddProduct/>}/>
          <Route path='/api/product' element={<List/>}/>
        </Routes>
      

    </div>
  )
}

export default Admin
