import type { TypographyProps } from '../../types'

function HelperText({className, children}: TypographyProps){
    return(
        <div className={`text-base-content/60 ${className}`}>{children}</div>
    )
}

export default HelperText
