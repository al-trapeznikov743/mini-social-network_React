import React from 'react'
import {Field} from 'redux-form'
// import styles from './FormControls.module.sass'


type PropsType = {
    input: any
    meta: any
}

export const Textarea: React.FC<PropsType> = ({input, meta, ...props}) => {
    return <div>
        <textarea {...input} {...props} />
    </div>
}

export const Input: React.FC<PropsType> = ({input, meta, ...props}) => {
    return <div>
        <input {...input} {...props} />
    </div>
}

// `touched: ${meta.touched}, visited: ${meta.visited}, error: ${meta.error}, input: ${input.value}`


// meta.touched && !input.value && <span>{meta.error}</span>

export const fealdCreator = (props: any) => {
    return <div>
        <Field {...props} />
    </div>
}