import styled from "styled-components";

const Avatar = styled.div`
    width: 50px;
    height: 50px;
    background: url(${props => props.avt});
    background-size: cover;
    object-fit: cover;
    border-radius: 50%;
`

export default Avatar;