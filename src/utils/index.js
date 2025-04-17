import { toast } from "react-toastify";

// get all cards from local storage
const getAllCarts = () => {
  const all = localStorage.getItem('carts');

  if (all) {
    const carts = JSON.parse(all);
    console.log(carts);
    return carts;
  } else {
    return [];
  }
};



// get all wishlist
const getAllWishlists = () => {
    const all = localStorage.getItem('wishlist');

    if(all) {
        const wishlists = JSON.parse(all);
        console.log(wishlists);
        return wishlists;
    } else {
        return[];
    }
};



// add a card to local storage
const addCart = (card) => {
  // get all previously saved card
  const carts = getAllCarts();
  const isExist = carts.find((item) => item.id == card.id);
  if (isExist) return toast.error('Product already exists!');

  carts.push(card);
  localStorage.setItem('carts', JSON.stringify(carts));
  toast.success('Successfully Added !');
};



// add wishlist to local storage
const addWishlist = (card) => {
    const wishlists = getAllWishlists();
    const isExist = wishlists.find((item) => item.id == card.id);
    if(isExist) return toast.error('Already exist in Wishlist!');

    wishlists.push(card);
    localStorage.setItem('wishlist', JSON.stringify(wishlists));
    toast.success('Successfully Added !')
};




// remove card to local storage
const removeCart = (id) => {
  // get all previously saved card data
  const carts = getAllCarts();
  const remaining = carts.filter((card) => card.id != id);
  localStorage.setItem('carts', JSON.stringify(remaining));
  toast.success('Successfully removed!');
};





// remove wishlist to local storage

const removeWishlist = (id) => {
    const wishlists = getAllWishlists();
    const remaining = wishlists.filter((card)=> card.id != id);
    localStorage.setItem('wishlist', JSON.stringify(remaining));
    toast.success('Successfully removed !');
}

const sortCartsByPrice = () => {
  const carts = getAllCarts();
  const sortedCarts = [...carts].sort((a, b) => a.price - b.price);
  localStorage.setItem('carts', JSON.stringify(sortedCarts)); // Update local storage with sorted data
  return sortedCarts; // Optionally return the sorted data if the component needs it immediately
};


// remove all the cart to local storage
const removeAllCart = () => {
  localStorage.removeItem('carts');
}




export { addCart, getAllCarts, removeCart, sortCartsByPrice, addWishlist, getAllWishlists, removeWishlist, removeAllCart};