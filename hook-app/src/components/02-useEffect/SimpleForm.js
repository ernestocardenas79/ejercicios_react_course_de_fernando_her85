import React, {useEffect, useState} from 'react'
import './effects.css';
import {Message} from './Message';

export const SimpleForm = () => {
    
    const [formState, setFormSte] = useState({
        name:'',
        email:''
    });

    const {name, email} = formState;

    useEffect(()=>{
        // console.log('hey!');
    },[])
   
    useEffect(()=>{
        // console.log('Form State Cambio');
    },[formState])

    useEffect(()=>{
        // console.log('email cambio !');
    },[email])


    const handleInputChange =({target})=>{
       
        setFormSte({
            ...formState,
            [target.name]: target.value
        })
    };

    return (
        <>
            <h1>usrEffect</h1>
            <hr/> 
            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name}
                    onChange={handleInputChange}

                />
        
            <input 
                type="text"
                name="email"
                className="form-control"
                placeholder="Tu email"
                autoComplete="off"
                value={ email}
                onChange={handleInputChange}
            />

            </div>       

            {name == 123 && <Message />}     
            
        </>
    )
}
