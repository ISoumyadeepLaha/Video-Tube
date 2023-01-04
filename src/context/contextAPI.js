import React, { createContext, useState, useEffect} from "react";

import { fetchAPI } from "../Utilis/fetchAPI";

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState();
    const [searchResults, setSearchResults] = useState();
    const [selectedCategories, setSelectedCategories] = useState("New");
    const [mobileMenu, setMobileMenu] = useState();

    useEffect(() => {
        fetchAPIData(selectedCategories);
    }, [selectedCategories])

    const fetchAPIData = (query) => {
        setLoading(true)
        fetchAPI(`search/?q=${query}`)
        .then((res)=> console.log(res))
        .catch((err)=> console.error(err))
        // setSearchResults(res)
        setLoading(false)
    }

    return(
        <Context.Provider value={{
            loading,
            setLoading,
            searchResults,
            setSearchResults,
            selectedCategories,
            setSelectedCategories,
            mobileMenu,
            setMobileMenu
        }}>
            {
                props.children
            }
        </Context.Provider>
    )
    
}