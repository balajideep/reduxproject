import React from "react";
import Itemcart from "./Itemcart";
import data from "./data"

// create home page first

export default function Home(){
    return(
        <div >
        <h1 className="text-center">ALL ITEMS</h1>
           <div className="container">
                <div className="row  mt-5">
                    {/* this is end and next go to itemcart page */}
                     {data.productData.map((item)=>{
                        // map funcion used to data values passed to itemcart in below
                        return(
                        <Itemcart img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} />
                         )
                      
                      } )}
                </div>

                {/* <div className="row justify-content-center mt-8"></div> */}
          </div>
        
        </div>
    )
}