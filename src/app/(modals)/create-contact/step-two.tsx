import { yupResolver } from "@hookform/resolvers/yup";
import { CreateContact, createContactSchema } from "@modules/contact";
import { useCreateContactMutation } from "@modules/contact/api";
import { COLORS, FONT_SIZE, IMAGE_URL } from "@shared/constants";
import { pickImage } from "@shared/tools";
import { Button, Icons, Input } from "@shared/ui";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Alert, StyleSheet, TouchableOpacity, View, Text } from "react-native";
export default function CreateContactStepTwo() {
    const params = useLocalSearchParams<{
        id: string;
        name: string;
        avatar: string;
        surname: string;
    }>();
    const { control, handleSubmit, setError, formState: { errors }, } = useForm({
        resolver: yupResolver(createContactSchema),
        defaultValues: {
            avatar: params.avatar,
            name: params.name,
            surname: params.surname,
        },
    });
    const router = useRouter();
    const [createContact] = useCreateContactMutation();
    async function onSubmit(data: CreateContact) {
        try {
            const response = await createContact({
                ...data,
                contactUserId: Number(params.id),
            }).unwrap();
            router.dismissTo("/contacts");
        }
        catch (error) {
            console.error(error);
            let message = "Unhandled error. Try again";
            if (error && typeof error === "object" && "status" in error) {
                switch (error.status) {
                    case 409:
                        message = "Such contact already exists!";
                        break;
                    case 422:
                        message = "Validation error";
                        break;
                    case 500:
                        message = "Server error";
                        break;
                }
            }
            setError("root", { message });
        }
    }
    return (<View style={styles.container}>
			<Controller control={control} name="name" render={({ field, fieldState: { error } }) => (<Input label="Contact name" placeholder="Name" containerStyles={styles.inputContainer} labelStyles={styles.inputLabel} style={styles.input} error={error?.message} onChange={field.onChange} onChangeText={field.onChange} value={field.value}/>)}/>
			<Controller control={control} name="surname" render={({ field, fieldState: { error } }) => (<Input label="Contact surname" placeholder="Surname" containerStyles={styles.inputContainer} labelStyles={styles.inputLabel} style={styles.input} error={error?.message} onChange={field.onChange} onChangeText={field.onChange} value={field.value}/>)}/>

			<Controller control={control} name="avatar" render={({ field, fieldState: { error } }) => {
            return (<View style={styles.avatarSelectionBlock}>
							<TouchableOpacity style={styles.selectAvatar} onPress={async () => {
                    const result = await pickImage({
                        selectionLimit: 1,
                        allowsMultipleSelection: false,
                        mediaTypes: "images",
                    });
                    if ("status" in result) {
                        Alert.alert("Access to your library was not granted");
                        return;
                    }
                    const selectedImages = result.assets;
                    if (!selectedImages) {
                        Alert.alert("Canceled. Try again!");
                        return;
                    }
                    field.onChange(selectedImages[0].uri);
                }}>
								<Image style={styles.avatar} source={field.value.includes("file")
                    ? field.value
                    : IMAGE_URL + field.value} contentFit="cover"/>
								<Icons.SearchIcon style={styles.searchIcon}/>
							</TouchableOpacity>
							<Text style={styles.selectAvatarText}>
								Select avatar
							</Text>
						</View>);
        }}/>
			<View style={styles.buttonSubmitContainer}>
				<Button title="Add contact" onPress={handleSubmit(onSubmit)}/>
				{errors.root?.message && (<View style={styles.errorBox}>
						<Icons.ErrorIcon width={16} height={16}/>
						<Text style={styles.error}>{errors.root?.message}</Text>
					</View>)}
			</View>
		</View>);
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingVertical: 30,
        paddingHorizontal: 10,
        alignItems: "center",
        gap: 20,
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
    avatarSelectionBlock: {
        alignItems: "center",
        justifyContent: "center",
    },
    avatar: {
        width: "100%",
        height: "100%",
        borderRadius: 25,
        opacity: 0.5,
    },
    selectAvatar: { width: 150, height: 150 },
    searchIcon: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{ translateX: -12 }, { translateY: -12 }],
    },
    selectAvatarText: {
        fontSize: FONT_SIZE.large,
    },
    buttonSubmitContainer: {
        alignItems: "center",
    },
    errorBox: {
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
    },
    error: {
        color: COLORS.error,
        fontSize: FONT_SIZE.medium,
        fontWeight: 500,
    },
});
