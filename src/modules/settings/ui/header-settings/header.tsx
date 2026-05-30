import { Header, Images } from "@shared/ui";
import { View } from "react-native";
export function HeaderSettings() {
    return (<Header title="Settings" headerLeft={<View>
					<Images.LogoImage style={{ width: 40, height: 40 }}/>
				</View>}/>);
}
