import React, {useRef, useMemo, useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import CashListItem from '../components/home/CashListItem';
// import Chart from './components/Chart';
import { useSelector, useDispatch } from 'react-redux'
import { getCashList, getChartData } from '../redux/actions/home.actions';
import { SET_LOADING } from '../redux/actions/type';
import LoadingComponent from '../components/UI/loading';
import { COLORS, FONTS, SIZES } from '../../constants';
import HomeChart from '../components/home/Chart';


const chartButtons = ['1D', '1W', '1M', '3M', '1Y', 'ALL']

const ListHeader = () => (
  <>
    <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}>Cash</Text>
      </View>
    <View style={styles.divider} />
  </>
)


export default function App() {
    const dispatch = useDispatch();
    const {cash, chart} = useSelector(({home})=> home)
    const {loading} = useSelector(({ui})=> ui)
    const [activeButton, setActiveButton] = useState(chartButtons[chartButtons.length - 1]);


  useEffect(() => {
    const fetchHomeData = () => {
      dispatch({type: SET_LOADING})
      dispatch(getChartData())
      dispatch(getCashList())
    }

    fetchHomeData();
  }, [])

  const renderChartOptions = () => {
        
        return (
        <View style={styles.chartButtonContainer}>
          {chartButtons.map(a => {
            return (
            <TouchableOpacity
              key={a}
            onPress={() => setActiveButton(a)}
            style={[styles.chartButton, activeButton === a ? {    backgroundColor: COLORS.darkgray} : null]}><Text
              style={[{fontWeight: 'bold'}, activeButton === a ? {color: COLORS.white} : null]}
            >{a}</Text></TouchableOpacity>)
          })}
        </View>  
        )
      
  }

  const openModal = (item) => {
    console.log(item, 'CLICKED')
  }

  return (
    <SafeAreaView style={styles.container}>
        {loading ?
    <LoadingComponent/> 
    :
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
    <View style={styles.chartContainer}>
    <Text
      style={{...FONTS.h1, color: COLORS.black, textAlign: 'center', paddingTop: SIZES.base}}
    >$11943</Text>
    {chart.datasets.length !== 0 &&
    <HomeChart
      chartData={chart}
    />}
    {renderChartOptions()}
    </View >
    <View style={styles.cashContainer}>
      <ListHeader/>
      <FlatList
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        data={cash}
        renderItem={({ item }) => (
          <CashListItem
            name={item.title}
            subtitle={item.subtitle}
            amount={item.amount}
            image={item.image}
            onPress={() => openModal(item)}
          />
        )}
    />
    </View>
    </ScrollView>
    
    }
      
      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: SIZES.base,
    paddingVertical: SIZES.padding
    // backgroundColor: COLORS.primaryOpacity3
  },
  chartContainer: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingBottom: 10,
    elevation: 2
    // minHeight: 200
  },
  chartButtonContainer: {
    marginTop: -20,
    flexDirection: 'row',
    padding: SIZES.padding,
    height: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: COLORS.gray
  },
  chartButton: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,

  },
  cashContainer: {
    marginTop: SIZES.padding,
    backgroundColor: COLORS.white,
     borderRadius: 10,
     elevation: 2
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
});