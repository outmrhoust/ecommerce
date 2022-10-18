import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const CheckoutItemContainer = styled.div`
width: 95%;
display: flex;
min-height: 100px;
border-bottom: 1px solid darkgrey;
padding: 15px 0;
font-size: 20px;
align-items: center;
`

export const ImageContainer = styled.div`
width: 23%;
padding-right: 15px;
`
export const Img = styled.img`
width: 100%;
height: 100%;
`
export const Name = styled.span`
width: 23%;
`
export const Quantity = styled.span`
width: 23%;
display: flex;
`
export const Price = styled.span`
width: 23%;
`
export const Arrow = styled(FontAwesomeIcon)`
cursor: pointer;
`
export const Value = styled.span`
        margin: 0 10px;
        margin-top: -4px;
`

export const Disabled = styled(FontAwesomeIcon)`
opacity: 20%;
`
export const RemoveButton = styled(FontAwesomeIcon)`
padding-left: 12px;
cursor: pointer;
`




 
  
  
  