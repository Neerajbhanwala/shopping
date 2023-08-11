import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../ContextApi/CartProvider";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";


export const CartItem = ({ image, price, title, description, quantity, id }) => {
  let [count, Setcount] = useState(1);
  const { cart, setCart } = useContext(CartContext);

  let decrement = () => {
    quantity > 0 &&
      setCart((prev) => {
        return prev.map((item) => {
          const product = { ...item };
          if (product.id === id) {
            product.quantity -= 1;
          }
          return product;
        });
      });
  };

  let increment = () => {
    setCart((prev) => {
      return prev.map((item) => {
        const product = { ...item };
        if (product.id === id) {
          product.quantity += 1;
        }
        return product;
      });
    });
  };


  const itemRemove = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f49d2d',
      cancelButtonColor: '#fdb960',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCart = cart.filter((item) => item.id !== id);
        console.log("deleted cart : ", updatedCart);
        setCart(updatedCart);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  };


  useEffect(() => {
    if (quantity) {
      Setcount(quantity);
    }
  }, [quantity]);

  return (
    <>

           
    <div className=" w-100 d-flex mb-5 justify-content-center pt-3" style={{height:'auto',borderBottom:'1px solid grey'}}>
          <div className="w-25 d-flex justify-content-center align-items-center" style={{height:'100%'}}>
         
          <NavLink to={`/singleproduct/${id}`}>
          <div className="w-50"><img src={image} alt="" width="140px" height="200rem" />
          </div>
          </NavLink>
          </div>
          
          <div className="w-75 ps-3 d-flex justify-content-center " style={{flexDirection:'column'}}>

            <h4 >Air conditioner Blue Start with 5 rating best Air conditioner</h4>
            <h4>₹<strong>35000.00</strong></h4>
            <div className="text-success">In Stock</div>
            <div>Elegible for FREE Delivery</div>
            <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="df" width="70px" />
            <div><input type="checkbox" /> This will be a gift.</div>
            <div><strong>Color:</strong> Yellow</div>
            <div><strong>Size:</strong> <span>3XL</span></div>

<div>
<button className="btn" style={{background:'#f49d2d'}} onClick={decrement}>-</button>
           <button className=" btn  m-2 border border-dark ps-2 pe-2 text-dark rounded"  style={{width:'55px', cursor:'none'}}> {count}</button>
            <button className="btn" style={{background:'#f49d2d'}} onClick={increment}>+</button>
            <span className="ms-4 pe-3" style={{borderRight:'1px solid grey', color:'#217c99', cursor:'pointer'}}  onClick={() => itemRemove()}>Delete</span>
            <span className="ms-4 pe-3" style={{borderRight:'1px solid grey', color:'#217c99', cursor:'pointer'}} >Save for later</span>
            <span className="ms-4 pe-3" style={{borderRight:'1px solid grey', color:'#217c99', cursor:'pointer'}} >see more like this</span>
            <span className="ms-4 pe-3" style={{borderRight:'1px solid grey', color:'#217c99', cursor:'pointer'}} >share</span>
</div>

          {/* <div className=" d-flex align-items-center" style={{justifyContent:'space-around'}}>
            <button className="btn btn-dark" onClick={decrement}>-</button>
           <button className=" btn w-25 m-2 disabled border border-dark ps-2 pe-2 rounded w-50"> {count}</button>
            <button className="btn btn-dark" onClick={increment}>+</button>
            <button className="btn btn-sm btn-muted rounded-0" onClick={() => itemRemove()} style={{borderRight:'1px solid grey', color:'green'}} >Delete</button>
            <button className="btn btn-sm w-25 btn-muted rounded-0" onClick={() => itemRemove()} style={{borderRight:'1px solid grey', color:'green'}} >Save for later</button>
            <button className="btn btn-sm w-25 btn-muted rounded-0" onClick={() => itemRemove()} style={{borderRight:'1px solid grey', color:'green'}} >See more like this</button>
            <button className="btn btn-sm btn-muted rounded-0" onClick={() => itemRemove()} style={{borderRight:'1px solid grey', color:'green'}} >Share</button>
          </div> */}

  {/* <span>${`${price}`}</span> */}


            {/* <div class=" w-25 d-flex justify-content-center align-items-center ps-3"style={{flexDirection:'column'}}>
            <sup className="text-dark" style={{fontSize:'13px'}}>Total</sup>
              <span> ${Number(price.split(" ")[0]) * count}</span>
            </div> */}
          {/* <button className="w-25 btn btn-danger" onClick={() => itemRemove()} ><i class="fa fa-trash" aria-hidden="true"></i> Remove</button> */}
        </div>
        </div>
        

        <h6 style={{ fontSize: "19px", position:'absolute', right:'400px' }}>
                Subtotal ({quantity} Items): ₹ 4,486.00
              </h6>






</>
  );
};
