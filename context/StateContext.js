import React, {createContext, useContext, useState, useEffect} from "react";
import { toast } from "react-hot-toast";


const Context = createContext();

export const StateContext = ({children}) => {
    const [showCart, setshowCart] = useState (false);
    const [cartItems, setcartItems] = useState();
}