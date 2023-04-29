import { Box } from "@chakra-ui/react"
import React, { ReactNode } from "react"

interface Props {
  children: ReactNode
}


export const ContainerStyle: React.FC<Props> =({children}) => {
  return(
    <>
      <Box w={'70%'} mx={'auto'}>
        {children}
      </Box>
    </>
  )
}
