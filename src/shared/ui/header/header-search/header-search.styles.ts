import { COLORS, FONT_SIZE } from "@shared/constants";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    inputBlock: {
        paddingHorizontal: 5,
        flex: 1,
    },
    inputContainer: {
        backgroundColor: COLORS.greyBackgorund,
        borderWidth: 1,
        borderColor: COLORS.grey,
        height: 42,
        paddingVertical: 0,
        padding: 0,
    },
    input: {
        fontSize: FONT_SIZE.body.large,
        lineHeight: FONT_SIZE.body.large,
        textAlignVertical: "center",
        paddingVertical: 0,
    },
    cancelText: {
        fontSize: FONT_SIZE.title.large,
        color: COLORS.brownPrimary,
    },
});
