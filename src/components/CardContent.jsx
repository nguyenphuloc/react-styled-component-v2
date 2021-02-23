import React from 'react'
import styled from 'styled-components'

const Content = styled.p`
    color: gray;
    margin-right: 30px;
`
const CardContent = (props) => {
    return (
        <Content>{props.content}</Content>
    )
}

export default CardContent;