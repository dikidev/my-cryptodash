
import React from "react";
import {Tile} from "../Shared/Tile";
import {AppContext} from "../App/AppProvider";
import ReactHighcharts from "react-highcharts/src/ReactHighcharts";
import HighchartsConfig from "./HighchartsConfig";

export default function () {
    return <AppContext.Consumer>
        {({}) =>
        <Tile>
            <ReactHighcharts config={highchartsConfig()}/>
        </Tile>
        }
    </AppContext.Consumer>
}