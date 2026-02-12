import type { TypographyProps } from '../../types'

function Subtitle({styleClass, children}: TypographyProps){
    return(
        <div className={`text-xl font-semibold ${styleClass}`}>{children}</div>
    )
}

export default Subtitle
