import { Text } from "galio-framework"
import { View } from "react-native"
import { LinkToLogin, LinkToRegister } from "../components/links";
import Styles from "../assets/styles";

const ForgotPasswordScreen = ({ navigation }) => {
    return (
        <View style={Styles.centerContainer}>
            <Text h3> Hello from ForgotPasswordScreen</Text>
            <LinkToLogin navigation={navigation} />
            <LinkToRegister navigation={navigation} />
        </View>
    )
}

export default ForgotPasswordScreen;