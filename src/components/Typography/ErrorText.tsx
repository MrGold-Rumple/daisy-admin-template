import type { TypographyProps } from '../../types'

function ErrorText({styleClass, children}: TypographyProps){
    return(
        <p className={`text-center  text-error ${styleClass}`}>{children}</p>
    )
}

export default ErrorText
