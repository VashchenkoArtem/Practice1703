import { COLORS, FONT_SIZE } from "@shared/constants";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.bisquePrimary,
        gap: 10,
        paddingBottom: 10,
        paddingHorizontal: 3,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.brownPrimary,
    },
    headerTop: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        paddingHorizontal: 5,
    },
    title: {
        flex: 1,
        fontSize: FONT_SIZE.large,
        fontWeight: 400,
        textAlign: "center",
    },
});
