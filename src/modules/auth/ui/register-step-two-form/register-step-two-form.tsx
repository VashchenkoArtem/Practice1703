import { View, Text, TouchableOpacity } from "react-native";
import { Input, Button } from "@shared/ui";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { stepTwoValidator } from "@modules/auth/models/lib/register/step.two.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import type { StepTwoForm } from "@modules/auth/models/types/register.types";
import { styles } from "./register-step-two-form.styles";
import { AvatarField } from "../avatar-field/avatar-field";
import { BaseApi } from "@shared/api/baseApi";
import { userApi, useRegisterMutation } from "@modules/auth/api/userApi";
import { useUserContext } from "@modules/auth/context/user";

export function RegisterStepTwoForm() {
    const params = useLocalSearchParams<{
        email: string;
        username: string;
        password: string;
    }>();
    const router = useRouter();
    const [register] = useRegisterMutation();
    const { control, handleSubmit, formState: {errors}, setError } = useForm<StepTwoForm>({
        resolver: yupResolver(stepTwoValidator),
    });
    const { token, setToken } = useUserContext();
    const rootError = errors?.root
    async function onSubmit(data: StepTwoForm) {
        try {
            const { token } = await register({ ...data, ...params }).unwrap();
            setToken(token);
			router.push("/(tabs)/chats")
        } catch (error: any) {   
            setError("root", {
                type: "server",
                message: error?.data
		    })
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.formFields}>
                <Controller
                    name="name"
                    control={control}
                    render={({ field, fieldState }) => (
                        <Input
                            inputContainerStyle={styles.inputContainer}
                            placeholder="Name"
                            onChangeText={field.onChange}
                            value={field.value}
                            error={fieldState.error?.message}
                        />
                    )}
                />

                <Controller
                    name="surname"
                    control={control}
                    render={({ field, fieldState }) => (
                        <Input
                            inputContainerStyle={styles.inputContainer}
                            placeholder="Surname"
                            onChangeText={field.onChange}
                            value={field.value}
                            error={fieldState.error?.message}
                        />
                    )}
                />

                <View style={styles.avatarContainer}>
                    <Controller
                        name="avatar"
                        control={control}
                        render={({ field }) => (
                            <AvatarField value={field.value} onChange={field.onChange} />
                        )}
                    />
                </View>
            </View>

            <View style={styles.buttonsContainer}>
                <Button onPress={handleSubmit(onSubmit)} title="Register" />
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.goBackText}>Go back to step one</Text>
                </TouchableOpacity>
                {rootError && 
                    <Text style={{ color: "red" }}>
                        {rootError.message}
                    </Text>
                }
            </View>
        </View>
    );
}
