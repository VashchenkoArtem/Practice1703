import { View, Text, TouchableOpacity } from "react-native";
import { Input, Button } from "@shared/ui";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { stepTwoValidator } from "@modules/auth/models/lib/register/step.two.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { StepTwoForm } from "@modules/auth/models/types/register.types";
import { styles } from "./register-step-two-form.styles";
import { AvatarField } from "../avatar-field/avatar-field";
import React from "react";
import { BaseApi } from "@shared/api/baseApi";
import { userApi, useRegisterMutation } from "@modules/auth/api/userApi";

export function RegisterStepTwoForm() {
    const params = useLocalSearchParams<{email: string, username: string, password: string}>();
    const router = useRouter();
    const formData = new FormData();
    const [ register ] = useRegisterMutation()
    const { control, handleSubmit } = useForm<StepTwoForm>({
        resolver: yupResolver(stepTwoValidator)
    });
    
    async function onSubmit(data: StepTwoForm) {
        await register({...data, ...params})
        console.log("edsdad")
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
                            <AvatarField 
                                value={field.value} 
                                onChange={field.onChange} 
                            />
                        )}
                    />
                </View>
            </View>

            <View style={styles.buttonsContainer}>
                <Button onPress={handleSubmit(onSubmit)} title="Register" />
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.goBackText}>Go back to step one</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}