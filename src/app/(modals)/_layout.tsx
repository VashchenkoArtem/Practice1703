import { HeaderBack, HeaderBackWithSearch } from "@shared/ui";
import { Stack } from "expo-router";
export default function ModalLayout() {
    return (<Stack screenOptions={{
            presentation: "modal",
        }}>
			<Stack.Screen name="create-contact/step-one" options={{
            header: () => <HeaderBack title="Find user"/>,
        }}/>
			<Stack.Screen name="create-contact/step-two" options={{
            header: () => <HeaderBack title="Create contact"/>,
        }}/>
			<Stack.Screen name="create-chat" options={{
            header: () => <HeaderBackWithSearch title="Create chat"/>,
        }}/>
		</Stack>);
}
