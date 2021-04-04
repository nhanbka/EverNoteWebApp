import { useState } from 'react'

const useInput = (initialValue = ' ', type = 'text') => {
    const [ value, setValue ] = useState(initialValue)
    const reset = () => {
        setValue(initialValue)
    }
    const bind = {
        value,
        type,
        onChange: (e) => {
            setValue(e.target.value)
        }
    }
    return [value, bind, reset]
}

export default useInput;