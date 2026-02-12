import { useState } from 'react'
import InformationCircleIcon from '@heroicons/react/24/outline/InformationCircleIcon'

// Helper function to capitalize first letter
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

interface SelectOption {
    name: string
    value?: string
}

interface SelectBoxPropsExtended {
    labelTitle?: string
    labelStyle?: string
    labelDescription?: string
    containerStyle?: string
    defaultValue?: string
    placeholder?: string
    options: SelectOption[]
    updateType?: string
    updateFormValue?: (value: { updateType: string; value: string }) => void
}

function SelectBox(props: SelectBoxPropsExtended){
    
    const {labelTitle, labelDescription, defaultValue, containerStyle, placeholder, labelStyle, options, updateType, updateFormValue} = props

    const [value, setValue] = useState(defaultValue || "")


    const updateValue = (newValue: string) =>{
        updateFormValue && updateFormValue({updateType: updateType || "", value : newValue})
        setValue(newValue)
    }


    return (
        <div className={`inline-block ${containerStyle}`}>
            <label  className={`label  ${labelStyle}`}>
                <div className="label-text">{labelTitle}
                {labelDescription && <div className="tooltip tooltip-right" data-tip={labelDescription}><InformationCircleIcon className='w-4 h-4'/></div>}
                </div>
            </label>

            <select className="select select-bordered w-full" value={value} onChange={(e) => updateValue(e.target.value)}>
                <option disabled value="PLACEHOLDER">{placeholder}</option>
                {
                    options.map((o: SelectOption, k: number) => {
                        return <option value={o.value || o.name} key={k}>{o.name}</option>
                    })
                }
            </select>
        </div>
    )
}

export default SelectBox
