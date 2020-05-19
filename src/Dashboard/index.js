import React from "react";
import styled from "styled-components";
import Page from "../Shared/Page";
import PriceGrid from "/Users/d/Desktop/Projects/cryptodash/my-cryptodash/src/Dashboard/PriceGrid.js";
import CoinSpotlight from "./CoinSpotlight";

const ChartGrid = styled.div`
    display: grid;
    margin-top: 20px;
    grid-gap: 15px;
    grid-template-columns: 1fr 3fr;
`

export default function () {
    return <Page name="dashboard">
        <PriceGrid/>
        <ChartGrid>
            <CoinSpotlight/>
            <div> Chart Goes Here </div>

        </ChartGrid>
    </Page>
}