import React from "react"
import styles from "./Layout.module.css"
import { Props } from "./types"
import cn from "classnames"

const Layout: Props = ({children, classname}) => {
    return(
        <div className={cn(styles.container, classname)}>
            {children}
        </div>
    )
}

export default Layout