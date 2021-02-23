import CardContainer from './CardContainer';
import CardImage from './CardImage';
import Header from './Header';
import Footer from './Footer';
import CardTitle from './CardTittle';
import CardContent from './CardContent';
import Avatar from './Avatar';
import FooterInfor from './FooterInfor';
import CardName from './CardName';
import TimeFooter from './TimeFooter';

const Cards = (props) => {
    const {img, title, content, avt, name, time} = props;
    return(
        <CardContainer>
            <CardImage img = {img} />
            <Header>
                <h3 style={{color:"violet", margin:"none"}}>Article</h3>
                <CardTitle title={title}/>
                <CardContent content={content}/>
            </Header>
            <Footer>
                <Avatar avt={avt}/>
                <FooterInfor>
                    <CardName name={name}/>
                    <TimeFooter time={time}/>
                </FooterInfor>
            </Footer>
        </CardContainer>      
    )
}

export default Cards;
