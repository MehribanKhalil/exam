import { createContext } from "react"
import UseLocal from "../hooks/UseLocal"
import toast, { Toaster } from 'react-hot-toast';


export const WishlistContext=createContext()

export const WishlistProvider=({children})=>{


    const  [wishlist, setWishlist] = UseLocal("wishlist")

    const handleWishlist=(product)=>{
        const index=wishlist.findIndex(x=> x._id === product._id)
        if (index === -1) {
            setWishlist([...wishlist,{...product}])
            toast.success('Added to Wishlist!')

        } else{
            setWishlist(wishlist.filter(x=>x._id !== product._id))
            toast.success('Deleted from Wishlist!')

        }
    }

    return(
        <WishlistContext.Provider value={{wishlist,handleWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}