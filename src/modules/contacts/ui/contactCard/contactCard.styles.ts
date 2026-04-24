import { COLORS } from "@shared/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    contactCard: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        borderBottomWidth: 1,
        padding: 5,
        borderBottomColor: COLORS.grey
    },
    contactName: {
        fontSize: 22
    },
    contactAvatar: {
        borderRadius: 123123
    }
})