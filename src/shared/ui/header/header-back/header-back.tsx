import { TouchableOpacity, Text } from "react-native";
import { Header } from "../header";
import { useRouter } from "expo-router";
import { HeaderProps } from "../header.types";
import { Icons } from "../../icons";
import { COLORS, FONT_SIZE } from "@shared/constants";
export function HeaderBack(props: HeaderProps) {
    const { title, ...otherProps } = props;
    const router = useRouter();
    return (<Header headerLeft={<TouchableOpacity style={{
                flexDirection: "row",
                alignItems: "center",
            }} onPress={() => {
                if (router.canGoBack())
                    router.back();
            }}>
					<Icons.BackIcon width={24} height={24} fill={COLORS.brownPrimary}/>
					<Text style={{
                color: COLORS.brownPrimary,
                fontSize: FONT_SIZE.title.large,
            }}>
						Back
					</Text>
				</TouchableOpacity>} title={title} {...otherProps}/>);
}
