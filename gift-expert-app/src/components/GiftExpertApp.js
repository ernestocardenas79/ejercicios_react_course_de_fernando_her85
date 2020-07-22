import React, {useState } from 'react';
import { AddCategory } from './AddCategory';
import { GiftGrid } from './GiftGrid';

export const GiftExpertApp = ({defaultCategories = []})=> {

    const [categories, setCategories] = useState(defaultCategories );
    
    return (
        <>
            <h2>GiftExpertApp</h2>   
            <AddCategory 
                setCategories={setCategories}
                /> 
            <hr/>
            <ol>
                {
                    categories.map(category=>(
                        <GiftGrid 
                            category={category} 
                            key={category}
                          />
                    ))
                }
            </ol>  
        </>
    )
}

export default GiftExpertApp
