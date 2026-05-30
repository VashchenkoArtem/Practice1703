import { COLORS, FONT_SIZE } from "@shared/constants";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    backBlock: {
        flexDirection: "row",
        gap: 3,
        alignItems: "center",
    },
    backText: {
        color: COLORS.brownPrimary,
        fontSize: FONT_SIZE.title.large,
    },
    avatar: {
        borderRadius: 25,
        width: 50,
        height: 50,
    },
    userInfoBlock: {
        alignItems: "center",
        justifyContent: "center",
    },
    userName: {
        fontSize: FONT_SIZE.large,
    },
});
