import styled from "styled-components";
import Header from "./Header";
import SidePanel from './SidePanel';

const Baseview = (props) => {
    return ( <Wrapper>
        <Header></Header>
        <Container>
        <SidePanel></SidePanel>
        <ChildContainer>
            {props.children}
        </ChildContainer>
        </Container>

        
        </Wrapper> );
}

const Wrapper =styled.div`
    display:flex;
    flex-direction:column;
    bottom:0;
    width:100%;
    height:100%;
    min-height: 100vh;
`

const Container = styled.div`
    display:flex;
    flex-direction: row;
    width:100%;
    height:100%;
    flex:auto;
    background:#774461;


`
const ChildContainer=styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    // height:100%;    
    background:#f04461;


`

export default Baseview;

