/*
vegetables -green
fruits-pink
*/
export default function displayItems(){
    const products=[
        {name:"Cabbage",isFruit:false,id:1},
        {name:"Litchi",isFruit:true,id:2},
        {name:"Spinach",isFruit:false,id:3},
        {name:"Mango",isFruit:true,id:4}
    ]
    return(
        <div>
            <ul>
           {
            products.map((product)=>{
                return(
                    <li key={product.id} className={product.isFruit?"text-pink-400":"text-green-600"}>
                        {product.name}
                    </li>
                )
            })
           }
           </ul>
        </div>
    )
} 