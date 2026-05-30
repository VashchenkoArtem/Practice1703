import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { ButtonProps } from "./button.types";
import { styles } from "./button.styles";
export function Button(props: ButtonProps) {
    const { title, style, titleStyle, disabled, isLoading, ...restProps } = props;
    const isDisabled = disabled || isLoading;
    return (<TouchableOpacity style={[styles.button, isDisabled && styles.disabled, style]} disabled={isDisabled} {...restProps}>
			{isLoading ? (<ActivityIndicator />) : (<Text style={[styles.text, isDisabled && styles.disabledText, titleStyle]}>
					{title}
				</Text>)}
		</TouchableOpacity>);
}
