import React from 'react'
import styled, { css } from "styled-components";


const SideBarContainer = styled.div`
    flex: 1;
    height: calc(100vh - 50px);
    background-color: rgb(251, 251, 255);
    position: sticky;
    top: 50px;
`
const SideBarWrapper = styled.div`
    padding: 20px;
    color: #555;
`
const SideBarMenu = styled.div`
    margin-bottom: 10px;
`

const SideBarList = styled.ul`
    list-style: none;
    padding: 5px;
`
const SideBarListItem = styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
&:hover {
        background-color: rgb(240, 240, 255);
    }
`
// const sharedStyle = css`
//     margin-right: 5px;
//     font-size: 20px !important;
// `


const SideBar = () => {
    return (
        <SideBarContainer>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarList>
                        <SideBarListItem>
                            Dashboard
                        </SideBarListItem>
                        <SideBarListItem>
                            Widget
                        </SideBarListItem>
                        <SideBarListItem>
                            Reviews
                        </SideBarListItem>
                        <SideBarListItem>
                            Customers
                        </SideBarListItem>
                        <SideBarListItem>
                            Online Analysis
                        </SideBarListItem>
                        <SideBarListItem>
                            Settings
                        </SideBarListItem>
                    </SideBarList>
                   
                </SideBarMenu>
        
            </SideBarWrapper>
        </SideBarContainer>
    )
}
export default SideBar

