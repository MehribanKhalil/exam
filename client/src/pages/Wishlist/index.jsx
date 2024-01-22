import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import SectionHeading from '../../components/CommonComponents/SectionHeading'
import { WishlistContext } from '../../context/WishlistContext'
import WishlistCard from './WishlistCard'

const Wishlist = () => {
  const {wishlist,handleWishlist}=useContext(WishlistContext)

  return (
    <div className='page section pt-48'>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>

      <SectionHeading
        title='Wishlist Products'
      />


      <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 py-16'>

      {
        wishlist.length===0 ? <p  className=' text-black text-2xl font-semibold'>Your Wishlist Empty </p> :
        wishlist && wishlist.map(item=>(
         <div key={item._id}>
           <WishlistCard
            {...item}
            product={item}
          />
         </div>
        ))
      }

      </div>

    </div>
  )
}

export default Wishlist
