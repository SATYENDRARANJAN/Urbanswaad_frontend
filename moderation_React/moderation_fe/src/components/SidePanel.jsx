import styled from "styled-components";
import SideButton from "./SideButton";

const SidePanel = () => {
    return (<Wrapper>
        <SideButton text='Review Requests' path=""/>
        <SideButton text='Admin' path=""/>
    </Wrapper>  );
}
 
const Wrapper = styled.div`
    width: 20%;
    min-width:150px;
    display:flex;
    // height:100%;
    // min-height:100vh;
    flex-direction:column;
    flex:auto;
    background:#767676;
`
export default SidePanel;