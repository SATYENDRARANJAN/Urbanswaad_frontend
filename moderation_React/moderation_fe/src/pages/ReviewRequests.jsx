import * as React from 'react';
import styled from "styled-components";
import Table from '../components/Table';




const ReviewRequests = () => {
    return ( <Wrapper>
        <Table/>
    </Wrapper> );
}
 

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    background:#324563;
`

export default ReviewRequests;
