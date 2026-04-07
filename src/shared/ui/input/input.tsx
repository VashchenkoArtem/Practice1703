import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { InputPasswordProps, InputProps } from "./input.types";
import { ICONS } from "../icons";
import { styles } from "./input.styles";
import { useState } from "react";

export function Input(props: InputProps) {
	const {
		iconLeft,
		iconRight,
		label,
		labelStyle,
		inputContainerStyle,
		error,
		style,
		...restProps
	} = props;
	return (
		<View>
			{label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
			<View style={[styles.inputContainer, inputContainerStyle]}>
				{iconLeft}
				<TextInput style={[styles.input, style]} {...restProps} />
				{iconRight}
			</View>
			{error && (
				<View style={styles.errorContainer}>
					<ICONS.ErrorIcon
						width={16}
						height={16}
						viewBox="0 0 16 16"
					/>
					<Text style={styles.errorText}>{error}</Text>
				</View>
			)}
		</View>
	);
}

function Password (props: InputProps) {
	const [isPasswordHiden, setIsPasswordHide] = useState<boolean>(true)
	return(
		<Input iconLeft={<ICONS.KeyIcon ></ICONS.KeyIcon>} iconRight={
			isPasswordHiden ? 
				<ICONS.EyeClosedIcon onPress={() => {
					setIsPasswordHide(!isPasswordHiden)
				}}>
				</ICONS.EyeClosedIcon>
			: 
				<ICONS.EyeOpenIcon onPress={() => {
					setIsPasswordHide(!isPasswordHiden)
				}}>
				</ICONS.EyeOpenIcon>
		}
		
		label={"Password"}
		secureTextEntry= {isPasswordHiden}
		placeholder={"Password"}
		{...props}
		>
		</Input>
		
	)
}

Input.Password = Password