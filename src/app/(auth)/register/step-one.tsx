import { SafeAreaView } from "react-native-safe-area-context"
import { Link } from "expo-router"
import { Input } from "@shared/ui"
import { WelcomeBlock, AdditionalLinks } from "@modules/auth"
import { RegisterStepOneForm } from "@modules/auth/ui/register-step-one-form/register-step-one-form"
import { KeyboardProvider, KeyboardAwareScrollView} from "react-native-keyboard-controller"


export default function StepOne(){
    return(
        <KeyboardProvider>
            <KeyboardAwareScrollView style={{flex: 1}} extraKeyboardSpace={20} bottomOffset={100}>
            <SafeAreaView style={{flex: 1, gap: 50}}>
                <WelcomeBlock></WelcomeBlock>
                <RegisterStepOneForm></RegisterStepOneForm>
                <AdditionalLinks linkTo="login" text="Already have an account?" linkText="Login now"></AdditionalLinks>
            </SafeAreaView>
            </KeyboardAwareScrollView>

        </KeyboardProvider>
        
    )
}