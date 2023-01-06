import { PageProps } from "gatsby"
import React from "react"


const Sobre: React.FC<PageProps> = () => {
    console.log(location.pathname)
    return (
        <>
            <h1>ola</h1>
        </>
    )
}

export default Sobre