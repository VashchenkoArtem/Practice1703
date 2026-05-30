import { COLORS, FONT_SIZE } from "@shared/constants";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        padding: 5,
        flexDirection: "row",
        backgroundColor: COLORS.bisquePrimary,
        alignItems: "center",
    },
    inputContainer: {
        backgroundColor: COLORS.grey,
        borderRadius: 10,
        minHeight: 40,
        height: "auto",
        maxHeight: 200,
    },
    input: {
        fontSize: FONT_SIZE.body.large,
    },
});
