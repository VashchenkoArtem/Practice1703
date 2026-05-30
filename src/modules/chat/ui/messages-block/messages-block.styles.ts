import { COLORS, FONT_SIZE } from "@shared/constants";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    list: {
        flexGrow: 1,
        gap: 10,
        padding: 10,
    },
    messageContainer: {
        height: "auto",
        width: "auto",
        maxWidth: "80%",
        padding: 5,
        borderRadius: 10,
    },
    message: {
        textAlign: "left",
        fontSize: FONT_SIZE.body.large,
    },
    noMessagesContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    noMessagesBlock: {
        width: 200,
        height: "auto",
        padding: 20,
        backgroundColor: COLORS.greyBackgorund,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
    },
    noMessagesText: {
        fontSize: FONT_SIZE.title.large,
        lineHeight: 32,
        textAlign: "center",
    },
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    myMessage: {
        alignSelf: "flex-end",
        backgroundColor: COLORS.brownSecondary,
        borderBottomRightRadius: 0,
    },
    otherMessage: {
        alignSelf: "flex-start",
        backgroundColor: COLORS.bisqueSecondary,
        borderBottomLeftRadius: 0,
    },
});
