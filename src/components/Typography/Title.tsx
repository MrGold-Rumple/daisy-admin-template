import type { TypographyProps } from '../../types'

function Title({className, children}: TypographyProps){
    return(
        <p className={`text-2xl font-bold  ${className}`}>{children}</p>
    )
}

export default Title
