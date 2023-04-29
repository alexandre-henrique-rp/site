
import React from "react"
import { StaticImage } from "gatsby-plugin-image"



export const LogoComponent: React.FC  = () => (
  <StaticImage
    src="../../images/Logo icon.png"
    alt="King Dev"
    placeholder="blurred"
    width={200}
    height={200}
  />
)
