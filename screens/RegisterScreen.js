import { Text } from "galio-framework"
import { View } from "react-native"
import { LinkToForgotPassword, LinkToLogin } from "../components/links";
import Styles from "../assets/styles";

const RegisterScreen = ({ navigation }) => {
    return (
        <View style={Styles.centerContainer}>
            <Text h3> Hello from RegisterScreen</Text>
            <LinkToLogin navigation={navigation} />
            <LinkToForgotPassword navigation={navigation} />
        </View>
    )
}

export default RegisterScreen;