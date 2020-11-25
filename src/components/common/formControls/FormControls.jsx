import React from 'react'
// import styles from './FormControls.module.sass'

export const Textarea = ({input, meta, ...props}) => {
    return <div>
        <textarea {...input} {...props} />
    </div>
}

export const Input = ({input, meta, ...props}) => {
    return <div>
        <input {...input} {...props} />
    </div>
}

// `touched: ${meta.touched}, visited: ${meta.visited}, error: ${meta.error}, input: ${input.value}`


// meta.touched && !input.value && <span>{meta.error}</span>