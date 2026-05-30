import { ImagePickerOptions, ImagePickerResult, launchImageLibraryAsync, requestMediaLibraryPermissionsAsync, } from "expo-image-picker";
export async function pickImage(params?: ImagePickerOptions): Promise<{
    status: "denied";
} | ImagePickerResult> {
    const { granted } = await requestMediaLibraryPermissionsAsync();
    if (!granted)
        return { status: "denied" };
    const library = await launchImageLibraryAsync(params);
    return library;
}
