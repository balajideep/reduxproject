import {useCart} from "react-use-cart";
export default function(){
    const{
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
         removeItem,
         emptyCart
        }=useCart();

        if(isEmpty) return <h1 className="text-center">your cart is empty</h1>
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5>Cart({totalUniqueItems}) total Items: ({totalItems})</h5>
                     
                     
                      <table className="table table-light ">

                         <tbody>
                        {items.map((item)=>{
                            return(
                            <tr >
                                <td>
                                    <img src={item.img} style={{height:"6rem"}}/> 
                                    {/* 1rem=16px in bootstrap */}
                                  </td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td> Quantity({item.quantity})</td>
                                <td>
                                    <button className="btn btn-info ms-2" 
                                    // ms-2 is space from side margin left
                                    onClick={()=>updateItemQuantity (item.id,item.quantity -1)}>-</button>
                                    <button className="btn btn-info ms-2"
                                     onClick={()=>updateItemQuantity (item.id,item.quantity +1)}>+</button>
                                    <button className="btn btn-danger ms-2"
                                     onClick={()=>removeItem (item.id)}>Remove Item</button>
                                </td>
                            </tr>
                            )
                        })}
                        </tbody> 
                     </table> 
                    </div>

                <div className="col-auto ms-auto">
                        <h2>Total Price: $ {cartTotal}</h2>
                     </div> 
                  <div className="col-auto">
                    <button className="btn btn-danger m-2"
                        onClick={()=>emptyCart()}> clear cart
                    </button>
                    <button className="btn btn-primary m-2">Buy Now</button>
                    </div>   

                   
            </div>
            
        </div>
    )
}