import React from 'react'
import styled from 'styled-components'

const Time = styled.p`
    color: gray;
    margin: 0 0 0 7px;
`

const TimeFooter = (props) => {
    return (
        <Time>{props.time}</Time>
    )
}

export default TimeFooter;