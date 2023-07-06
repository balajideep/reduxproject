
import React from "react";
//  usecard is used to add item in
// after create card this add
import{useCart} from "react-use-cart";
//  this is second page its card page value start from below not top

export default function Itemcart(props){
// next step of add card ,add item next go button
  const{addItem}=useCart();
    return(
        <div className="col-11 col-md-6 col-xl-3">
    <div class="card ">
  <img src={props.img} class="card-img-top " height={220} width={160}  />
  <div class="card-body text-center">
    <h5 class="card-title">{props.title}</h5>
    <h5 class="card-title">${props.price}</h5>
    <p class="card-text">{props.desc}</p>
    <a href="#" class="btn btn-success" onClick={()=>addItem(props.item)}>Add to cart</a>
  </div>
</div>

   </div>
    )
}