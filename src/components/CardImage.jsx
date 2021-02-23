import styled from 'styled-components';

const CardImage = styled.div`
    width: 100%;
    height: 55%;
    background: url(${props => props.img});
    background-size: cover;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;
export default CardImage;