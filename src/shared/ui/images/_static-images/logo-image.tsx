import { Image, type ImageProps } from "expo-image";

export function LogoImage(props: ImageProps) {
	return <Image source={require("@assets/logo.png")} {...props}></Image>;
}
export function DefaultImage(props: ImageProps) {
	return <Image source={require("@assets/defaultAvatar.png")} {...props}></Image>;
}