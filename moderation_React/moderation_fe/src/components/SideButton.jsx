import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const SideButton = (props) => {
    const navigate = useNavigate();

    console.log("PROPS ** ",props)
    return (  <Button onClick={redirectTo(props)}>
         {props.text}
    </Button>);
}

const redirectTo=(props)=>{
    const navigate = useNavigate();

    navigate("/"+ (props.path || ''))

}
const Button = styled.div`
    display : flex;
    padding: 20px;
    width: 100%;
    height; 40px;
    border: 1px solid #e4e4e4;
    background-color: #aeaeae;
    &:hover {
        background-color: #aeaefe;
    }

`
 
export default SideButton;