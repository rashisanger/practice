import { useEffect, useState } from "react"

export const useSearch=(items,key)=>{
    const [query,setQuery]=useState("");
    const [filteredItems,setFilteredItems]=useState(items);

    useEffect(()=>{
        if(!query){
            setFilteredItems(items);
        }
        const q=query.toLowerCase();
        const filtered=items.filter(item=>item[key].toLowerCase().includes(q));
        setFilteredItems(filtered);
    },[query,items,key]);

    return {query,setQuery,filteredItems};

}