export interface MarginProps {
    marginTop?: string,
    marginBottom?: string,
    marginRight?: string,
    marginLeft?: string
}

export interface PaddingProps {
    paddingTop?: string,
    paddingRight?: string,
    paddingBottom?: string,
    paddingLeft?: string
}

export interface IdentifyProps {
    id?: string,
    name?: string
}

// * When using position_B with TailwindCSS then you shound not use other props
export interface PositionProps {
    position_B?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky',
    top?: string,
    right?: string,
    bottom?: string,
    left?: string,
}