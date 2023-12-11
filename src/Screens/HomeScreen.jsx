import { useState } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions,ScrollView } from "react-native"
import{ TabView, SceneMap, TabBar} from "react-native-tab-view"
import { CarIndicador } from "../Components/CardIndicador"
import Constants from "expo-constants"
import { AntDesign } from '@expo/vector-icons'; 

const primeraRuta = () => (
    <ScrollView style={{backgroundColor : "#EEF4F9", flex : 1}}>
        <CarIndicador
        priname="Total"
        subname="Cantidad de Preinscritos e inscritos"
        indicador="515"/>
        <CarIndicador
        priname="Postulantes Validados"
        subname="Cantidad de Postulantes Inscritos"
        indicador="495"/>
        <CarIndicador
        priname="En Proceso"
        subname="Cantidad de Postulantes Pre Inscritos"
        indicador="20"/>
        <CarIndicador
        priname="Pendientes Validar"
        subname="Postulantes por Verificar Documentos"
        indicador="0"/>
    </ScrollView>
)
const segundaRuta = () => (
    <ScrollView style={{backgroundColor : "#EEF4F9", flex : 1}}>
        <CarIndicador
        priname="Total Derecho Exam."
        subname="Derecho de Examen Vendidos"
        indicador="495"/>
        <CarIndicador
        priname="Derecho E. Privado"
        subname="Examen Colegio Privado"
        indicador="131"/>
        <CarIndicador
        priname="Derecho E. Público"
        subname="Examen Colegio Público"
        indicador="364"/>
        <CarIndicador
        priname="Prospectos Vendidos"
        subname="Prospectos Vendidos"
        indicador="496"/>
    </ScrollView>
)
const terceraRuta = () => (
    <ScrollView style={{backgroundColor : "#EEF4F9", flex : 1}}>
        <CarIndicador
        priname="Ingreso Total"
        subname="Total de Ingreso Generado por modalidad"
        indicador="S/.155,000"/>
        <CarIndicador
        priname="Examen Colegio Privado"
        subname="Pago por derecho de Examen Colegio Privado"
        indicador="S/.39,300"/>
        <CarIndicador
        priname="Examen Colegio Público"
        subname="Pago por derecho de Examen Colegio Público"
        indicador="S/.91,000"/>
        <CarIndicador
        priname="Prospectos Adquiridos"
        subname="Ingresos de Prospectos Vendidos"
        indicador="S/.24,800"/>
    </ScrollView>
)
const renderScene = SceneMap({
    primero: primeraRuta,
    segundo: segundaRuta,
    tercero : terceraRuta
})

export const HomeScreen = () => {

    const layout = useWindowDimensions()

    const [index, setIndex] = useState(0)
    const [routes] = useState([
        { key: 'primero', title: 'Proceso' },
        { key: 'segundo', title: 'cantidad' },
        { key: 'tercero', title: 'Económicos' }
    ])

    return (
        <>
            <View style={styles.containerheader}>
                <TouchableOpacity>
                    <AntDesign name="back" size={30} color="white" />
                </TouchableOpacity>
                <View style={styles.containeruser}> 
                    <View>
                        <Text style={styles.usuariotext}>Hola, <Text style={styles.usuarioname}>Diego</Text></Text>
                        <Text style={{color : "white", fontSize : 12}}>ABC123DEF</Text>
                    </View>
                    <Image  source={require("../../assets/user.png")}/>
                </View>
            </View>
            <TabView
                navigationState={{index,routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width}}
                renderTabBar={(props) => (
                    <TabBar
                    {...props}
                    indicatorStyle={{backgroundColor : "white"}}
                    style={{backgroundColor : "#32AE59"}}/>
            )}
            />
        </>
    )
}

const styles = StyleSheet.create({
    containerheader : {
        backgroundColor : "#32AE59",
        paddingVertical : 15,
        height : 65,
        width : "100%",
        flexDirection : "row",
        justifyContent : "space-between",
        paddingHorizontal : 15,
        marginTop : Constants.statusBarHeight,
        alignItems : "center"
    },
    usuariotext : {
        color : "white",
        fontSize : 18,
    },
    usuarioname : {
        fontWeight : "bold",
        fontSize : 18,
    }, 
    containeruser : {
        flexDirection : "row",
        gap : 10,
        alignItems : "center"
    }
})