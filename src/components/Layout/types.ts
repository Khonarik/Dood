import { FC, ReactNode } from "react"

type LayoutProps = {
    children: ReactNode
    classname?: string
}

export type Props = FC<LayoutProps>