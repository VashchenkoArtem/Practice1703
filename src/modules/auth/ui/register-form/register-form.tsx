import { Input, Button, ICONS } from "@shared/ui";
import { View } from "react-native";
import { styles } from "./register-form.styles";
import { useRouter } from "expo-router";


export function RegisterForm() {
    const router = useRouter()
    
    function onSubmit(){
        router.push({
            pathname: "/register/step-two",
            params: {
                email: "bebe"
                
            }
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.formFields}>
                <Input inputContainerStyle={styles.inputContainer} iconLeft={<ICONS.MailIcon/>} label="Email" placeholder="email@gmail.com"></Input>
                <Input inputContainerStyle={styles.inputContainer} iconLeft={<ICONS.UserIcon/>} label="Username" placeholder="yourname"></Input>
                <Input.Password  ></Input.Password>
                
            </View>
                <Button onPress={onSubmit} title="Continue"></Button>
        </View>
    )
}