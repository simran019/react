
export default function Product({product,key}){
    const styleChange=product.stocked?"green":"red"
    return(
     
            <tr style={{color:styleChange}}>
                
                <td className="border-2 w-1/2 text-center">{product.name}</td>
                <td className="border-2 w-1/2 text-center">{product.price}</td>
            </tr>
    )
}