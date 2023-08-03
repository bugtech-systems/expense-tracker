//import liraries
import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import {
    LineChart,
} from "react-native-chart-kit";
import { COLORS, SIZES } from '../../../constants';


// create a component
const HomeChart = ({ chartData }) => {

    return (
        <LineChart
            withVerticalLines={false}
            withHorizontalLines={false}
            withVerticalLabels={false}
            data={chartData}
            width={Dimensions.get("window").width} // from react-native
            withDots={false}
            height={220}
            // yAxisLabel="$"
            withInnerLines={true}
            withOuterLines={true}
            yAxisSuffix="k"
            yAxisInterval={0} // optional, defaults to 1
            chartConfig={{
                // backgroundColor: "#fb8c00",
                backgroundGradientTo: COLORS.white,
                // backgroundGradientFrom: "#fb8c00",
                fillShadowGradientFrom: "#fb8c00",
                decimalPlaces: 0, // optional, defaults to 2dp
                // color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => COLORS.black,
                style: {
                    borderRadius: 16,
                },
                backgroundGradientFrom: COLORS.white,
                backgroundGradientFromOpacity: 1,
                backgroundGradientTo: COLORS.white,
                backgroundGradientToOpacity: 1,
                color: (opacity = 1) => `rgba(251,140,0,${opacity})`,
                strokeWidth: 5, // optional, default 3
                // useShadowColorFromDataset: false // optional

            }}
            bezier
        />
    );
};



//make this component available to the app
export default HomeChart;
