import React from 'react'

export default function Alert(props) {
    const captalize = (text)=>{
        let capText = text.toLowerCase();
        return capText.charAt(0).toUpperCase() + capText.slice(1);
    }
    return (
        <div style={{height:'50px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{captalize (props.alert.type)}</strong>:  {props.alert.msg}
                            </div> }
        </div>
    )
}
