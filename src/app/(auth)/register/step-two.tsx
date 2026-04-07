import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Image } from "react-native";
import { AdditionalLinks, WelcomeBlock } from "@modules/auth";
import { KeyboardAwareScrollView, KeyboardProvider } from "react-native-keyboard-controller";
import { RegisterStepTwoForm } from "@modules/auth/ui/register-step-two-form/register-step-two-form";
import { COLORS } from "@shared/constants";

export default function StepTwo() {
    return (
        <KeyboardProvider>
            <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }} extraKeyboardSpace={20} bottomOffset={100}>
                <SafeAreaView style={{paddingBottom: 30, flex: 1, backgroundColor: COLORS.backgroundPrimary}}>
                    <WelcomeBlock />
                    
                    <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "center", gap: 5, marginTop: 30, marginBottom: 20 }}>
                        <Image 
                            source={require("../../../assets/person.png")} 
                            
                            resizeMode="contain" 
                        />
                        <Text style={{ fontSize: 33, fontWeight: "400" }}>Personal info</Text>
                    </View>
                    
                    <RegisterStepTwoForm />
                    
                    <View style={{ marginTop: 100 }}>
                        <AdditionalLinks linkTo="login" text="Already have an account? " linkText="Login now" />
                    </View>
                </SafeAreaView>
            </KeyboardAwareScrollView>
        </KeyboardProvider>
    );
}