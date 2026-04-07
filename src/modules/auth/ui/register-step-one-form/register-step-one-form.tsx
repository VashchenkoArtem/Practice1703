import { Input, Button, ICONS } from "@shared/ui";
import { View } from "react-native";
import { styles } from "./register-step-one-form.styles";
import { useRouter } from "expo-router";
import { StepOneForm } from "@modules/auth/models/types/register.types";
import { Controller, useForm } from "react-hook-form";
import { stepOneValidator } from "@modules/auth/models/lib/register/step.one.validation";
import { yupResolver } from "@hookform/resolvers/yup";


export function RegisterStepOneForm() {
    const { handleSubmit, control } = useForm<StepOneForm>({ resolver: yupResolver(stepOneValidator) })

    const router = useRouter()

    function onSubmit(data: StepOneForm){
        router.push({
            pathname: "/register/step-two",
            params: {
                email: data.email,
                username: data.username,
                password: data.password
            }
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.formFields}>
                <Controller
                    name="email"
                    control={control}
                    render={({ field, fieldState }) => {
                        return (
                            <Input
                                inputContainerStyle={styles.inputContainer}
                                iconLeft={<ICONS.MailIcon />}
                                label="Email"
                                placeholder="email@gmail.com"
                                onChangeText={field.onChange}
                                value={field.value}
                                error={fieldState.error?.message}
                            />
                        )
                    }}
                />
                <Controller
                    name="username"
                    control={control}
                    render={({ field, fieldState }) => {
                        return (
                            <Input
                                inputContainerStyle={styles.inputContainer}
                                iconLeft={<ICONS.UserIcon />}
                                label="Username" placeholder="User123"
                                onChangeText={field.onChange}
                                value={field.value}
                                error={fieldState.error?.message}
                            />
                        )
                    }}
                />
                <Controller
                    name="password"
                    control={control}
                    render={({ field, fieldState }) => {
                        return (
                            <Input.Password
                                onChangeText={field.onChange}
                                value={field.value}
                                error={fieldState.error?.message}
                            />
                        )
                    }}
                />
            </View>
            <Button onPress={handleSubmit(onSubmit)} title="Continue"></Button>
        </View>
    )
}