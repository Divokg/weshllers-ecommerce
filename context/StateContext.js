import React, {createContext, useContext, useState, useEffect} from "react";
import { toast } from "react-hot-toast";
import { Product } from "../components";


const Context = createContext();

export const StateContext = ({children}) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    let foundProduct;
    let index;


    const onAdd = (product, quantity) =>{
    const checkProductInCart = cartItems.find ((item) => item._id === product._id);
        


        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantites) => prevTotalQuantites + quantity);


        if(checkProductInCart){
            

            const updatedCartItems = cartItems.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })

            setCartItems(updatedCartItems);
            
        } else {
            product.quantity = quantity;

            setCartItems([...cartItems, {...product}]); 
        }
        toast.success(`${qty} ${product.name} added to the cart.`);
    }


   const onRemove = (product) => {
    foundProduct = cartItems.find((item => item._id ===  product._id));
    const newCartItems = cartItems.filter((item) => item._id !== product._id);


    setTotalPrice((prevTotalPrice)=> prevTotalPrice-foundProduct.price * foundProduct.quantity)
    setTotalQuantities(prevTotalQuantites => prevTotalQuantites - foundProduct.quantity);
    setCartItems(newCartItems);
   } 






    const toggleCartItemQuantity = (id, value) =>{
        foundProduct = cartItems.find((item => item._id ===  id));
        index = cartItems.findIndex((product => product._id === id));

        const newCartItems = cartItems.filter((item) => item._id !== id)

        if(value === 'inc') {
            foundProduct.quantity += 1;
            const newCartItems = cartItems.map((item) => {
                if(foundProduct._id === item._id) return foundProduct;
    
                return item;    
            });
            setCartItems(newCartItems);
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
        } else if (value === 'dec') {
            if(foundProduct.quantity > 1){
                foundProduct.quantity -= 1;
                const newCartItems = cartItems.map((item) => {
                    if(foundProduct._id === item._id) return foundProduct;
    
                    return item;
                })
    
                setCartItems(newCartItems);
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
            }
        }
    }    



const Mpesa = ()=> {

  
    fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
      method: 'POST',
    
      body: JSON.stringify({
        "BusinessShortCode": 174379,
        "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjIwNjE2MTQ1OTU3",
        "Timestamp": "20220616145957",
        "TransactionType": "CustomerPayBillOnline",
        "Amount": 1,
        "PartyA": 254729666501,
        "PartyB": 174379,
        "PhoneNumber": 254729666501,
        "CallBackURL": "https://mydomain.com/path",
        "AccountReference": "CompanyXLTD",
        "TransactionDesc": "Payment of X" 
      })
    })
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log(error));
    

}


    







    const incQty = ()=> {
        setQty((prevQty) => prevQty + 1);

    }

    const decQty = ()=> {
        setQty((prevQty) => {
            if(prevQty - 1 < 1) return 1;

            return prevQty - 1;
        });
        
    }

    return (
        <Context.Provider value = {{

            showCart,
            setShowCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            incQty,
            decQty,
            onAdd,
            toggleCartItemQuantity,
            onRemove,
            Mpesa
        }}>
        {children}
        </Context.Provider>
    )
}


export const useStateContext = ()=> useContext(Context);