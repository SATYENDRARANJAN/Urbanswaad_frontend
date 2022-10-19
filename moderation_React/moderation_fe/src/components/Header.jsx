import styled from "styled-components";
import HeaderImage from "../logo.svg"
import LogoutIcon from '../assets/moderation/logout.svg'
import UserIcon from '../assets/moderation/user.svg'
const Header = () => {
    return (
        <Wrapper>
            <ImageHeader src={HeaderImage} >

            </ImageHeader>
            <HeaderDiv>
                <Title>JIO MARKET </Title>
                <SubTitle>MODERATION DASHBOARD</SubTitle>
            </HeaderDiv>
            <ButtonTray>    
                <Icon src={UserIcon}></Icon>
                <Icon src={LogoutIcon}></Icon>

            </ButtonTray>
        </Wrapper>
     );
}
 
export default Header;

const Wrapper= styled.div`
    width:100%;
    display:flex;
    height:100px;
    background :#e4e4e4;
    justify-content:space-between;

`

const ImageHeader = styled.img`
    width: 150px;
    height: 60px;
    padding-top:20px;

`
const ButtonTray=styled.div`
    display:flex;
    
`
const Icon=styled.img`
    display: flex;
    padding:30px 20px;
    width: 40px;
    height: 40px;
    &:hover {
        background-color: #aeaefe;
    }
`

const HeaderDiv=styled.div`
    display: flex;
    flex:auto;
    flex-direction: column;
`
const Title= styled.div`
    display: flex;
    padding-top: 10px;
    padding-left: 10px;
    font-family:'Open Sans';
    font-size: 30px;
`
const SubTitle= styled.div`
    display: flex;
    padding-top: 10px;
    padding-left: 10px;
    font-family:'Open Sans';


`

