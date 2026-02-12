import { useState } from "react"
import type { TextAreaInputProps } from '../../types'


function TextAreaInput({labelTitle, labelStyle, type, containerStyle, defaultValue, placeholder, updateFormValue, updateType}: TextAreaInputProps){

    const [value, setValue] = useState(defaultValue || "")

    const updateInputValue = (val: string) => {
        setValue(val)
        updateFormValue && updateFormValue({updateType: updateType || "", value : val})
    }

    return(
        <div className={`form-control w-full ${containerStyle}`}>
            <label className="label">
                <span className={"label-text text-base-content " + labelStyle}>{labelTitle}</span>
            </label>
            <textarea value={value} className="textarea textarea-bordered w-full" placeholder={placeholder || ""} onChange={(e) => updateInputValue(e.target.value)}></textarea>
        </div>
    )
}


export default TextAreaInput
