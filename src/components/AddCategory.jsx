import { useState } from "react";

const AddCategory = ({onAddCategory}) => {
    
    const [ inputValue, setInputValue ] = useState ('');
    

    const handleChange = e =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault()
        if(inputValue.trim().length <= 1) return;
        onAddCategory(inputValue.trim())
        setInputValue('');
    }

    return (
        <>
            <h1>search</h1>
            <form
            onSubmit={handleSubmit}>
            <input
            type= 'text'
            placeholder = "Escribe una categoria"
            value={inputValue}
            onChange={handleChange}
            />
            </form>
        </>
    );
}

export default AddCategory;

//jcgp