import { View } from "react-native";
import { HeaderBack } from "../header-back";
import { HeaderProps } from "../header.types";
import { COLORS } from "@shared/constants";
import { styles } from "./header-back-with-search.styles";
import { Input } from "../../input";
import { Icons } from "../../icons";
export function HeaderBackWithSearch(props: HeaderProps) {
    return (<HeaderBack headerBottom={<View style={styles.inputBlock}>
					<Input placeholder="Search" containerStyles={styles.inputContainer} style={styles.input} autoCorrect={false} autoComplete={"off"} iconLeft={<Icons.SearchIcon width={24} height={24} fill={COLORS.black}/>}/>
				</View>} {...props}/>);
}
