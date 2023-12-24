import { Text } from "galio-framework"
import { TouchableOpacity } from "react-native"

export const LinkToLogin = ({ navigation }) => {
    const handleLink = () => {
        navigation.navigate('Login')
    }

    return (
        <TouchableOpacity onPress={handleLink}>
            <Text p color="blue">Already have an account? Login!</Text>
        </TouchableOpacity>
    )
}

export const LinkToRegister = ({ navigation }) => {
    const handleLink = () => {
        navigation.navigate('Register')
    }

    return (
        <TouchableOpacity onPress={handleLink}>
            <Text p color="blue">Create an account!</Text>
        </TouchableOpacity>
    )
}

export const LinkToForgotPassword = ({ navigation }) => {
    const handleLink = () => {
        navigation.navigate('ForgotPassword')
    }

    return (
        <TouchableOpacity onPress={handleLink}>
            <Text p color="blue">Forgot your password?</Text>
        </TouchableOpacity>
    )
}