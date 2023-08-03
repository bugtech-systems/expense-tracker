import React, { useEffect } from "react";
import {
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    View,
    Text,
    FlatList,
    Platform
} from 'react-native';
import { VictoryPie } from 'victory-native';
import { useSelector, useDispatch } from 'react-redux'
import {Svg} from 'react-native-svg';
import { MaterialIcons } from '@expo/vector-icons'

import { COLORS, FONTS, SIZES, icons, images } from '../../constants';
import { getExpensesList, getPieChartData } from "../redux/actions/expenses.actions";
import { SET_LOADING } from "../redux/actions/type";
import LoadingComponent from "../components/UI/loading";
import ExpenseListItem from "../components/home/ExpenseListItem";

const ListHeader = () => (
  <>
    <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}>Top Spending Categories</Text>
      </View>
    <View style={styles.divider} />
  </>
)


const Expenses = ({navigation}) => {
  const dispatch = useDispatch();
  const {piechart} = useSelector(({expenses}) => expenses)
  const {loading} = useSelector(({ui}) => ui)

    const [selectedCategory, setSelectedCategory] = React.useState({})


    useEffect(() => {
      const fetchExpenseData = () => {
        dispatch({type: SET_LOADING})
        dispatch(getPieChartData())
      }
  
      fetchExpenseData();
    }, [])


    function processCategoryDataToDisplay() {
        // Filter expenses with "Confirmed" status
        let chartData = piechart.map((item) => {
            var total = item.amount
            return {
                name: item.name,
                y: total,
                // expenseCount: confirmExpenses.length,
                color: item.color,
                id: item.id
            }
        })

        console.log(chartData, 'Fetch chart data')


        // filter out categories with no data/expenses
        let filterChartData = chartData.filter(a => a.y > 0)

        // Calculate the total expenses
        let totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0)

        // Calculate percentage and repopulate chart data
        let finalChartData = filterChartData.map((item) => {
            let percentage = (item.y / totalExpense * 100).toFixed(0)
            return {
                label: `${percentage}%`,
                y: Number(item.y),
                expenseCount: item.y,
                color: item.color,
                name: item.name,
                id: item.id
            }
        })

        return finalChartData
    }

    function setSelectCategoryByName(name) {
        let category = piechart.filter(a => a.name == name)
        setSelectedCategory(category[0])
    }

    function renderChart() {

        let chartData = processCategoryDataToDisplay()
        let colorScales = chartData.map((item) => item.color)

        if(Platform.OS == 'ios')
        {
            return (
                <View  style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <VictoryPie
                        
                        data={chartData}
                        labels={(datum) => `${datum.y}`}
                        radius={({ datum }) => (selectedCategory && selectedCategory.name == datum.name) ? SIZES.width * 0.4 : SIZES.width * 0.4 - 10}
                        innerRadius={70}
                        labelRadius={({ innerRadius }) => (SIZES.width * 0.4 + innerRadius) / 2.5}
                        style={{
                            labels: { fill: "white",  },
                            parent: {
                                ...styles.shadow
                            },
                        }}
                        width={SIZES.width * 0.8}
                        height={SIZES.width * 0.8}
                        colorScale={colorScales}
                        events={[{
                            target: "data",
                            eventHandlers: {
                                onPress: () => {
                                    return [{
                                        target: "labels",
                                        mutation: (props) => {
                                            let categoryName = chartData[props.index].name
                                            setSelectCategoryByName(categoryName)
                                        }
                                    }]
                                }
                            }
                        }]}
    
                    />
{/*     
                    <View style={{ position: 'absolute', top: '42%', left: "42%" }}>
                        <Text style={{ ...FONTS.h1, textAlign: 'center' }}>{totalExpenseCount}</Text>
                        <Text style={{ ...FONTS.body3, textAlign: 'center' }}>Expenses</Text>
                    </View> */}
                </View>
    
            )
        }
        else
        {
            // Android workaround by wrapping VictoryPie with SVG
            return (
                <View  style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Svg width={SIZES.width} height={SIZES.width} style={{width: "100%", height: "auto"}}>

                        <VictoryPie
                            standalone={false} // Android workaround
                            data={chartData}
                            labels={(datum) => `${datum.y}`}
                            radius={({ datum }) => (selectedCategory && selectedCategory.name == datum.name) ? SIZES.width * 0.4 : SIZES.width * 0.4 - 10}
                            innerRadius={70}
                            labelRadius={({ innerRadius }) => (SIZES.width * 0.4 + innerRadius) / 2.5}
                            style={{
                                labels: { fill: "white" },
                                parent: {
                                    ...styles.shadow
                                },
                            }}
                            width={SIZES.width}
                            height={SIZES.width}
                            colorScale={colorScales}
                            events={[{
                                target: "data",
                                eventHandlers: {
                                    onPress: () => {
                                        return [{
                                            target: "labels",
                                            mutation: (props) => {
                                                let categoryName = chartData[props.index].name
                                                setSelectCategoryByName(categoryName)
                                            }
                                        }]
                                    }
                                }
                            }]}
        
                        />
                    </Svg>
                   {piechart.length !== 0 && <FlatList
                      horizontal
                      data={piechart}
                      renderItem={({item}) => {
                        return (
                          <TouchableOpacity
                          onPress={() => setSelectCategoryByName(item.name)}
                          style={{paddingLeft: SIZES.base, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <View
                                style={{
                                  height: 10,
                                  width: 10,
                                  backgroundColor: item.color,
                                  marginTop: 3,
                                  marginRight: 4
                                  // marginRight: SIZES.padding
                                }}                            
                            />
                            
                            <Text style={[{...FONTS.body3}, selectedCategory == item.name ?  { color: COLORS.primary} : null]}>{item.name}</Text>
                          </TouchableOpacity>
                        )
                      }}
                    />}
                </View>
            )
        }
        
    }

    
    return (
        <View style={styles.container}>
           {loading ?
    <LoadingComponent/> 
    :   
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
          <View style={styles.chartContainer}>
                        {renderChart()}
                        {/* {renderExpenseSummary()} */}
                    </View>
    
                    {piechart.length !== 0 &&
    <View style={styles.cashContainer}>
      <ListHeader/>
      <FlatList
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        data={piechart}
        renderItem={({ item }) => (
          <ExpenseListItem
            name={item.name}
            subtitle={item.subtitle}
            amount={item.amount}
            image={item.image}
          />
        )}
    />
    <TouchableOpacity style={styles.itemWrapper}
      onPress={() => navigation.navigate('Category', {})}
    >
      <Text style={styles.title}>View all categories</Text>
      <View style={styles.rightWrapper}>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color={COLORS.darkgray} />
                </View>
    </TouchableOpacity>
    </View>}
    </ScrollView>
    
    
              
}
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.base,
    // backgroundColor: COLORS.
  },
  chartContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: SIZES.base,
    minHeight: SIZES.width,
    elevation: 3
  },
  cashContainer: {
    marginTop: SIZES.padding,
    backgroundColor: COLORS.white,
     borderRadius: 10,
     elevation: 2
  },
  title: {
    fontSize: 15,
    color: "#95A1AD",
    fontWeight: 'bold'
},
itemWrapper: {
  paddingHorizontal: 16,
  paddingVertical: 14,
  // marginTop: 14,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: 'center',
  borderBottomColor: COLORS.darkgray,
  borderBottomWidth: .5
},
rightWrapper: {
  alignItems: 'flex-end',
},
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    titleWrapper: {
      marginTop: 20,
      paddingHorizontal: 16,
    },
    largeTitle: {
      fontSize: 24,
      fontWeight: "bold",
    },
    divider: {
      height: StyleSheet.hairlineWidth,
      backgroundColor: '#A9ABB1',
      // marginHorizontal: 16,
      marginTop: 16,
    },
    bottomSheet: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: -4,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
})

export default Expenses;
