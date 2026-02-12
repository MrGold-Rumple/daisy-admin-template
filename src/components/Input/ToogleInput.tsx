import { useState } from "react"
import type { ToggleInputProps } from '../../types'


function ToogleInput({labelTitle, labelStyle, type, containerStyle, defaultValue, placeholder, updateFormValue, updateType}: ToggleInputProps){

    const [value, setValue] = useState(defaultValue || false)

    const updateToogleValue = () => {
        const newValue = !value
        setValue(newValue)
        updateFormValue && updateFormValue({updateType: updateType || "", value : newValue})
    }

    return(
        <div className={`form-control w-full ${containerStyle}`}>
            <label className="label cursor-pointer">
                <span className={"label-text text-base-content " + labelStyle}>{labelTitle}</span>
                <input type="checkbox" className="toggle" checked={value}  onChange={() => updateToogleValue()}/>
            </label>
        </div>
    )
}


export default ToogleInput
