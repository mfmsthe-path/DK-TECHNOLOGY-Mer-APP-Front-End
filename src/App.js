import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Composants/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";


function App (){
    return(
        <div>
            <BrowserRouter>
            
            <Navbar/>
            <Routes>
                <Route path="/" element={<Shop/>}/>
                <Route path="/Models" element={<ShopCategory category="Models"/>}/>
                <Route path="/Categories" element={<ShopCategory category="Categories"/>}/>
                <Route path="/Product" element={<Product/>}/>
                <Route path=":/ProductId" element={<Product/>}/>
                <Route path="/Cart" element={<Cart/>}/>
                <Route path="/Login" element={<LoginSignup/>}/>

            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App ;


