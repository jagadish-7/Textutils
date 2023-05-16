import React from 'react'

export const Alert = (props) => {

    const capitalize = (word)=>{
        let lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase()+lower.slice(1);
      }
    
    return (
        props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show py-2`} role="alert">
                <strong>{capitalize(props.alert.type)} :</strong> {props.alert.message}
            </div>
        </div>
    )
}
