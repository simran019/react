import ProductsCategory from "./productscategory";
import Product from "./products";
import { useState } from "react";
export default function ProductsTable({dataFromAPI,isStockedOnly, filterText}){
  

  const rows=[];
  let lastCategory=null;
  dataFromAPI.forEach((product,i)=>{
    if(product.name.toLowerCase().indexOf(filterText.toLowerCase())===-1){
      return;
    }
    if(isStockedOnly && !product.stocked){
      return
    }
    if(product.category!==lastCategory){
      rows.push(
        <ProductsCategory category={product.category} key={product.category}/>
      )
    }
    rows.push(
      <Product product={product} key={product.name}/>
    )
    lastCategory=product.category
  })
  return(
    <table className="border-2 w-1/2 border-black border-separate border-spacing-2">
      <thead className="">
        <tr>
          <th className="border border-slate-600 w-1/2">Name</th>
          <th className="border border-slate-600 w-1/2">Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}