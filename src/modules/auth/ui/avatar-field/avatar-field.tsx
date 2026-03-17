
import { View, Text} from "react-native";
import { styles } from "./avatar-field.styles";
import { IMAGES, ICONS} from "@shared/ui";
export function AvatarField() {
    return(
        <View style={styles.ContainerAvatar}>
            <View style={styles.AvatarView}>
                <IMAGES.DefaultImage style={styles.DefaultAvatar} />
                <ICONS.SearchingGlassIcon />
            </View>
            <Text style={styles.DefaulText}>Select avatar</Text>
        </View>
    )
}

