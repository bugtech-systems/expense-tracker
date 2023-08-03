//import liraries
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import ExpenseListItem from '../components/home/ExpenseListItem';
import { useSelector, useDispatch } from 'react-redux'
import { getExpensesList } from '../redux/actions/expenses.actions';
import { SET_LOADING } from '../redux/actions/type';
import LoadingComponent from '../components/UI/loading';

const ListHeader = () => (
  <>
    <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}>All Spending Categories</Text>
      </View>
    <View style={styles.divider} />
  </>
)

// create a component
const AllCategoryScreen = () => {
  const dispatch = useDispatch();
  const { expenses} = useSelector(({expenses}) => expenses)
  const { loading} = useSelector(({ui}) => ui)
  
  
  
  useEffect(() => {
    const fetchExpenseData = () => {
      dispatch({type: SET_LOADING})
      dispatch(getExpensesList())
    }

    fetchExpenseData();
  }, [])
  
  
  return (
    <View style={styles.container}>
         {loading ?
    <LoadingComponent/> 
    :   <ScrollView>
     <ListHeader/>
      <FlatList
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        data={expenses}
        renderItem={({ item }) => (
          <ExpenseListItem
            name={item.name}
            subtitle={item.subtitle}
            amount={item.amount}
            image={item.image}
          />
        )}
    />
    </ScrollView>}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#2c3e50',
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
});

//make this component available to the app
export default AllCategoryScreen;
