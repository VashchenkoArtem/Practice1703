import { COLORS, FONT_SIZE } from "@shared/constants";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    inputBlock: {
        paddingHorizontal: 5,
    },
    inputContainer: {
        backgroundColor: COLORS.greyBackgorund,
        borderWidth: 1,
        borderColor: COLORS.grey,
        height: 40,
    },
    input: {
        fontSize: FONT_SIZE.body.large,
        paddingVertical: 0,
    },
});
