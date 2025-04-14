import { useDispatch, useSelector } from "react-redux"
import AccordionItemList from "./AccordionItemList"
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const dispatch = useDispatch();

    const handleClearCart =  () => {
        dispatch(clearCart())
    }

    const cartItems = useSelector((store) => store.cart.items)
    return (
        <div className="text-center m-10">
            <h1 className="font-bold ">Welcome to Cart</h1>
            <div className="border-b m-auto w-6/12  items-center">
                <button className="p-2 m-2 bg-black text-white rounded-lg cursor-pointer font-bold" onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length === 0 && (<h1>Cart is Empty. Add Items to the Cart</h1>)}
                <AccordionItemList items = {cartItems}/>
            </div>
        </div>
    )
}

export default Cart
