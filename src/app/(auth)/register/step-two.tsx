import { SafeAreaView } from "react-native-safe-area-context"
import { Link, useLocalSearchParams } from "expo-router"
import { Text } from "react-native"
import { AdditionalLinks, LoginForm, WelcomeBlock } from "@modules/auth"
import { KeyboardAwareScrollView, KeyboardProvider } from "react-native-keyboard-controller"
export default function StepTwo(){
    const params = useLocalSearchParams<{email: string}>()
    
    return(
        <KeyboardProvider>
            <KeyboardAwareScrollView style={{flex: 1}} extraKeyboardSpace={20} bottomOffset={100}>
                <SafeAreaView style={{flex: 1, gap: 50}}>
                    <WelcomeBlock></WelcomeBlock>
                    <Text>Personal Info</Text>
                    <LoginForm></LoginForm>
                    <Text>{params.email}</Text>
                    <AdditionalLinks linkTo="login" text="Already have an account?" linkText="Login now"></AdditionalLinks>
                </SafeAreaView>
            </KeyboardAwareScrollView>
        </KeyboardProvider>
    )
}