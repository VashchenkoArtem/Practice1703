import { View } from "react-native";
import { styles } from "./login-form.styles";
import { Button, ICONS, Input } from "@shared/ui";
import { Controller, useForm } from "react-hook-form";
import { ReactNode } from "react";
import { loginValidator } from "@modules/auth/models/lib/login.validation";
import {yupResolver} from "@hookform/resolvers/yup"
import { useRouter } from "expo-router";
import { useLogin } from "@modules/auth/hooks/login";
interface LoginForm {
	email: string;
	password: string
}


export function LoginForm() {
	const { handleSubmit, control, formState } = useForm<LoginForm>({resolver: yupResolver(loginValidator)})
	const { loginSend } = useLogin();
	async function onSubmit(data: LoginForm){
		loginSend(data);
	}
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
						return (<Input.Password error={fieldState.error?.message} onChangeText={field.onChange} {...field}/>)
					}}>
						
					
				</Controller>
				
			</View>
			<Button onPress={handleSubmit(onSubmit)} title="Login" />
		</View>
	);
}
