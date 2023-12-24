import { Text } from "galio-framework"
import { View } from "react-native"
import { LinkToForgotPassword, LinkToRegister } from "../components/links";
import Styles from "../assets/styles";

const LoginScreen = ({ navigation }) => {
    return (
        <View style={Styles.centerContainer}>
            <Text h3> Hello from LoginScreen</Text>
            <LinkToRegister navigation={navigation} />
            <LinkToForgotPassword navigation={navigation} />
        </View>
    )
}

export default LoginScreen;