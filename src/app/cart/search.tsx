export default function Search({filterText, onSetFilterText, isStockedOnly,onSetIsStockedOnly}){
    return(
        <div className="flex flex-col gap-2 p-2">
           <input
           placeholder="Search"
           className="border-2 p-2 border-black"
           value={filterText}
           onChange={(e)=>onSetFilterText(e.target.value)}
           />
           <label>
            <input
            type="checkbox"
            checked={isStockedOnly}
           onChange={(e)=>onSetIsStockedOnly(e.target.checked)}
            />
            {"   "}
            Only show products in stock
           </label>
        </div>
    )
}