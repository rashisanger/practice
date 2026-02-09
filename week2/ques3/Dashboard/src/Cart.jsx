import React, { useState } from 'react'

const Cart = () => {
    const products=[
        {id:1,name:"Mobile",price:15000},
        {id:2,name:"Fridge",price:10000},
        {id:3,name:"AC",price:30000}
    ];
    const [cart,setCart]=useState([]);

    const toggleCart=(product)=>{
        if(cart.includes(product.id)){
            setCart(cart.filter((id)=>id!=product.id));
        }else{
            setCart([...cart,product.id]);
        }
    };
    const total=cart.reduce((sum,id)=>{
        const product=products.find((p)=>p.id===id);
        return sum+(product? product.price:0);
    },0);
    
  return (
    <div>
        <h2>Product List</h2>
        <table border="1" cellPadding="10">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product)=>{
                        const inCart=cart.includes(product.id);
                        return(
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td><button style={{backgroundColor:inCart?"red":"green",
                                    color:"white",
                                    border:"none",
                                    padding:"8px 12px",
                                    borderRadius:"6px"
                                }} onClick={()=>toggleCart(product)}>{inCart?"Remove from Cart":"Add To Cart"}</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <h3>Total:{total}</h3>
    </div>
  )
}

export default Cart