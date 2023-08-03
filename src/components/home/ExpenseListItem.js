import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { COLORS, SIZES } from '../../../constants'
import { MaterialIcons } from '@expo/vector-icons'


const ExpenseListItem = ({ name, subtitle, amount, image, onPress }) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.itemWrapper}>

                {/* Left side */}
                <View style={styles.leftWrapper}>
                    <Image source={{ uri: image }} style={styles.image} />
                    <View style={styles.titlesWrapper}>
                        <Text style={styles.title}>{name.toUpperCase()}</Text>
                        <Text style={styles.subtitle}>${((Math.random() * 100) * amount).toLocaleString('en-US', { currency: 'USD' })} spent</Text>
                    </View>
                </View>


                {/* Right side */}
                <View style={styles.rightWrapper}>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color={COLORS.darkgray} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
    leftWrapper: {
        flexDirection: "row",
        alignItems: 'center',
    },
    image: {
        height: 48,
        width: 48,
        borderRadius: 50
    },
    titlesWrapper: {
        marginLeft: 8,
    },
    title: {
        fontSize: 15,
        color: "#95A1AD",
        fontWeight: 'bold'
    },
    subtitle: {
        marginTop: 4,
        fontSize: 18,
        color: COLORS.black,
    },
    rightWrapper: {
        alignItems: 'flex-end',
    },
})

export default ExpenseListItem