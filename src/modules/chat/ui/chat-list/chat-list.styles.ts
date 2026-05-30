import { COLORS, FONT_SIZE } from "@shared/constants";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    contactItem: {
        width: "100%",
        padding: 5,
        gap: 5,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: COLORS.grey,
        alignItems: "center",
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    localName: {
        fontSize: FONT_SIZE.title.large,
    },
    lastMessage: {
        color: COLORS.greyText,
        fontSize: FONT_SIZE.title.small,
    },
});
