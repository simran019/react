"use client"

import { useState } from "react";
import ProductsTable from "./productstable";
import Search from "./search";

export default function FilterableProductTable() {
  const dataFromAPI = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];
  const [filterText, setFilterText] = useState("");
  const [isStockedOnly, setIsStockedOnly] = useState(false);
  return (
    <div className="w-full flex flex-col items-center">
      <Search 
      filterText={filterText} 
      onSetFilterText={setFilterText}
      isStockedOnly={isStockedOnly}
      onSetIsStockedOnly={setIsStockedOnly}
      />
      <ProductsTable 
      dataFromAPI={dataFromAPI} 
      filterText={filterText}
      isStockedOnly={isStockedOnly} />
    </div>
  );
}
