import { View, Text } from "react-native";
import { styles } from "./login-form.styles";
import { Button, ICONS, Input } from "@shared/ui";
import { Controller, useForm } from "react-hook-form";

import { loginValidator } from "@modules/auth/models/lib/login.validation";
import {yupResolver} from "@hookform/resolvers/yup"
import { useRouter } from "expo-router";
import { useLogin } from "@modules/auth/hooks/login";
import { useState } from "react";

import { useLoginMutation } from "@modules/auth/api/userApi";

import { useUserContext } from "@modules/auth/context/user";

interface LoginForm {
	email: string;
	password: string
}


export function LoginForm() {
	const { handleSubmit, control, formState: {errors}, setError } = useForm<LoginForm>({resolver: yupResolver(loginValidator)})
	const [ login ] = useLoginMutation()
	const rootError = errors.root
	const { setToken } = useUserContext()
	const router = useRouter()
	async function onSubmit(data: LoginForm){
		try{
			const { token } = await login(data).unwrap()
			setToken(token)
			router.push("/(tabs)/chats")
		}
	catch(error: any){
		setError("root", {
			type: "server",
			message: error?.data
		})
	}}

	return (
		<View style={styles.container}>
			<View style={styles.formFields}>
				<Controller
					name="email"
					control={control}
					render={({field, fieldState}) => {
						return (
							<Input
								onChangeText={field.onChange}
								error={fieldState.error?.message}
								placeholder="Your email"
								inputMode="email"
								autoCapitalize="none"
								autoComplete="off"
								autoCorrect={false}
								inputContainerStyle={styles.inputContainer}
								style={styles.input}
								iconLeft={<ICONS.MailIcon />}
								label="Email"
								{...field}
							/>
						) 
					}} 
				/>
				<Controller 
					name="password"
					control={control}
					render={({field, fieldState}) => {
						return (
							<View>
								<Input.Password error={fieldState.error?.message} onChangeText={field.onChange} {...field}/>
									
							</View>
					)
					}}>
						
					
				</Controller>
				
			</View>
			<Button onPress={handleSubmit(onSubmit)} title="Login" />
				{rootError && 
					<Text style={{ color: "red" }}>
						{rootError.message}
					</Text>
				}
		</View>
	);
}
