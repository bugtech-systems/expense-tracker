import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { COLORS, SIZES } from '../../../constants'

const CashListItem = ({ name, subtitle, amount, image, onPress }) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.itemWrapper}>

                {/* Left side */}
                <View style={styles.leftWrapper}>
                    <Image source={{ uri: image }} style={styles.image} />
                    <View style={styles.titlesWrapper}>
                        <Text style={styles.title}>{name.toUpperCase()}</Text>
                        <Text style={styles.subtitle}>{subtitle}</Text>
                    </View>
                </View>


                {/* Right side */}
                <View style={styles.rightWrapper}>
                    <Text style={styles.subtitle}>${amount.toLocaleString('en-US', { currency: 'USD' })}</Text>
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
        color: COLORS.darkgray,

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

export default CashListItem