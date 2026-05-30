import { Header, Images } from "@shared/ui";
import { View } from "react-native";
export function HeaderProfile() {
    return (<Header title="Profile" headerLeft={<View>
					<Images.LogoImage style={{ width: 40, height: 40 }}/>
				</View>}/>);
}
