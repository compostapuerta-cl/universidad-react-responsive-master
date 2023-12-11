import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "./src/Screens/HomeScreen"
import { PagosScreen } from "./src/Screens/PagosScreen.jsx"
import { ProspectoScreen } from "./src/Screens/ProspectoScreen.jsx"
import { IncripcionScreen } from "./src/Screens/IncripcionScreen.jsx"
import LoginScreen from "./src/Screens/LoginScreen.jsx"

import { AntDesign,SimpleLineIcons } from '@expo/vector-icons'

const HomeStackNavigator = createNativeStackNavigator()


const Tab = createBottomTabNavigator()

function MyTabs() {
    return (
        <Tab.Navigator
        initialRouteName="Inicio"
        screenOptions={{
            tabBarActiveTintColor : "#32AE59",
            tabBarStyle : {
                backgroundColor : "#fff",
            },tabBarStyle : {
                padding : 10,
                height : 70
            },
            tabBarLabelStyle : {
                marginBottom : 10,
                fontSize : 13
            }
        }}>
            <Tab.Screen name="Inicio" component={HomeScreen}
            options={{
                tabBarIcon : ({color, size}) => (
                    <AntDesign name="home" size={size} color={color} />
                ),
                headerTitleAlign : "center",
                headerShown : false
            }}/>
            <Tab.Screen name="Pagos" component={PagosScreen}
            options={{
                tabBarIcon : ({color, size}) => (
                    <AntDesign name="wallet" size={24} color={color} />
                )
            }}/>
            <Tab.Screen name="Prospecto" component={ProspectoScreen}
            options={{
                tabBarIcon : ({color, size}) => (
                    <SimpleLineIcons name="user" size={size} color={color} />
                )
            }}
            />
            <Tab.Screen name="Inscripcion" component={IncripcionScreen}
            options={{
                tabBarIcon : ({color, size}) => (
                    <SimpleLineIcons name="pencil" size={size} color={color} />
                )
            }}
            />
            <Tab.Screen name="Login" component={LoginScreen}
            options={{
                tabBarIcon : ({color, size}) => (
                    <AntDesign name="home" size={size} color={color} />
                ),
                headerTitleAlign : "center",
                headerShown : false
            }}/>
        </Tab.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}