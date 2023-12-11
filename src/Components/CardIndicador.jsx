import { StyleSheet, Text, View } from "react-native"

export const CarIndicador = ({priname,subname,indicador}) => {
    return(
        <View style={styles.container}>
            <View style={styles.cardcontainer}>
                <View style={{width : "50%"}}>
                    <Text style={styles.indicadorbold}>{priname}</Text>
                    <Text style={styles.indicardorname}>{subname}</Text>
                </View>
                <View style={{width : "50%"}}>
                    <Text style={styles.indicadornumber}>{indicador}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width : "100%",
        paddingVertical : "5%",
    },
    cardcontainer : {
        backgroundColor : "#FFFFFF",
        borderRadius : 5,
        width : "90%",
        height : 89,
        flexDirection : "row",
        justifyContent : "space-evenly",
        alignItems : "center",
        paddingHorizontal : 14.9,
        shadowColor : '#000',
        shadowOffset : {
            width : 0,
            height : 1,
        },
        shadowOpacity : 0.29,
        shadowRadius : 4.65,
        elevation : 7,
    },
    indicadorbold : {
        fontWeight : "bold",
        fontSize : 18
    },
    indicardorname : {
        color : "#9B9B9B",
        fontSize : 12
    },
    indicadornumber : {
        color : "#32AE59",
        fontSize : 30,
        fontWeight : "bold",
        textAlign : "right"
    }
})