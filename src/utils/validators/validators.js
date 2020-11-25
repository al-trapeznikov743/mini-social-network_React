export const required = (value) => {
    if(value) {
        return undefined
    }
    return 'Field is required'
}

export const maxLength = (value) => {
    if(value && value.length > 80) {
        return 'Max length is 80 symbols'
    }
    return undefined
}

export const maxLengthCreator = (length) => {
    return (value) => {
        if(value && value.length > length) {
            return `Max length is ${length} symbols`
        }
        return undefined
    }
}