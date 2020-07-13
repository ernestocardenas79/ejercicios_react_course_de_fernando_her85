import React, {useState } from 'react';
import { AddCategory } from './AddCategory';
import { GiftGrid } from './GiftGrid';

export const GiftExpertApp = ()=> {

    const [categories, setCategories] = useState(['One Punch',]);

    const handleAdd = (value) =>{
        setCategories([value, ...categories ])
    }

    return (
        <>
            <h2>GiftExpertApp</h2>   
            <AddCategory 
                setCategories={handleAdd }
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
