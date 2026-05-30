import { TouchableOpacity, View, Text } from "react-native";
import { Header } from "../header";
import { HeaderProps } from "../header.types";
import { styles } from "./header-search.styles";
import { COLORS } from "@shared/constants";
import { Input } from "../../input";
import { Icons } from "../../icons";
export function HeaderSearch(props: HeaderProps) {
    return (<Header headerBottom={<View style={styles.container}>
					<View style={styles.inputBlock}>
						<Input placeholder="Search" containerStyles={styles.inputContainer} style={styles.input} autoComplete="off" autoCorrect={false} iconLeft={<Icons.SearchIcon width={24} height={24} fill={COLORS.black}/>}/>
					</View>
					<TouchableOpacity>
						<Text style={styles.cancelText}>Cancel</Text>
					</TouchableOpacity>
				</View>} {...props}/>);
}
