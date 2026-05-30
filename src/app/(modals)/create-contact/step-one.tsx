import { useLazyUserByUsernameQuery } from "@modules/auth";
import { useUserContext } from "@modules/auth/context";
import { COLORS, FONT_SIZE, IMAGE_URL } from "@shared/constants";
import { Button, Icons, Input } from "@shared/ui";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
export default function CreateContactStepOne() {
    const { user } = useUserContext();
    const [value, setValue] = useState<string>("");
    const [getUser, { data, isLoading, error, isSuccess, reset }] = useLazyUserByUsernameQuery();
    useEffect(() => {
        if (!value) {
            reset();
            return;
        }
        if (user?.username === value)
            return;
        getUser({ username: value });
    }, [value]);
    const isNotFound = error && "status" in error ? error.status === 404 : false;
    const router = useRouter();
    return (<View style={styles.container}>
			<Input containerStyles={styles.inputContainer} labelStyles={styles.inputLabel} placeholder="Search..." value={value} onChangeText={(text) => setValue(text)} style={styles.input} label="Username" iconLeft={<Icons.SearchIcon width={32} height={32} fill={COLORS.black}/>}/>
			{isNotFound && (<View style={styles.notFoundBlock}>
					<Icons.ErrorIcon width={32} height={32}/>
					<Text style={styles.notFoundText}>User not found</Text>
				</View>)}
			{data && isSuccess && !isLoading && (<View style={styles.userBlock}>
					<Image source={IMAGE_URL + data.avatar} contentFit={"cover"} style={styles.avatar}/>
					<Text style={styles.username}>{data.username}</Text>
				</View>)}
			<Button title="Select" isLoading={isLoading} disabled={isSuccess ? false : true} onPress={() => {
            if (!data)
                return;
            router.push({
                pathname: "/create-contact/step-two",
                params: {
                    name: data.name,
                    surname: data.surname,
                    avatar: data.avatar,
                    id: data.id,
                },
            });
        }}/>
		</View>);
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: COLORS.white,
        alignItems: "center",
        gap: 30,
    },
    userBlock: {
        padding: 20,
        borderBottomColor: COLORS.grey,
        borderBottomWidth: 1,
        gap: 5,
    },
    username: {
        fontSize: FONT_SIZE.title.large,
        textAlign: "center",
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 25,
    },
    inputContainer: {
        height: 50,
    },
    inputLabel: {
        fontSize: FONT_SIZE.title.large,
    },
    input: {
        fontSize: FONT_SIZE.body.large,
    },
    notFoundBlock: {
        flexDirection: "row",
        gap: 10,
    },
    notFoundText: {
        color: COLORS.error,
        fontSize: FONT_SIZE.title.large,
    },
});
