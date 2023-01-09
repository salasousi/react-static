import React from "react";
import styled from "styled-components";
import Featured from '../components/Featured';
import Chart from "../components/Chart";
import { userData } from "../data";

const HomeContainer = styled.div`
    flex: 4;
`
const Home = ()=> {
    return (
        <HomeContainer>
            <Featured />
            <Chart data={userData} title="Website Visitors" grid dataKey="Active User"/>
        </HomeContainer>
    )
}

export default Home