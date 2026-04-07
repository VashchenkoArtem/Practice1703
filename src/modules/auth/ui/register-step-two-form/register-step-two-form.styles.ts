import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 24,
    },
    formFields: {
        width: "100%",
        gap: 16,
    },
    inputContainer: {
        height: 56,
        backgroundColor: "#fae9dd",
        borderRadius: 12,
        borderWidth: 0,
        paddingHorizontal: 16,
    },
    avatarContainer: {
        alignItems: "center",
        marginTop: 10,
    },
	buttonsContainer: {
		alignItems: "center",
        width: "100%",
        gap: 16,
    },
    goBackText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#000",
        textAlign: "center",
    }
});