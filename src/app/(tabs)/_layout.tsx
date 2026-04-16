import { ICONS } from "@shared/ui";
import { Tabs } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"

export default function TabLayout() {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#FFD9B3" }}>
			<Tabs
            	screenOptions={{
                headerShown: false,
                tabBarItemStyle: {
                    justifyContent: "center",
                    alignItems: "center",
                    height: 60
                },
                tabBarStyle: {
                    backgroundColor: "#FFD9B3",
                    borderTopWidth: 0
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    color: "black"
                }
            }}>
                <Tabs.Screen
                    name="contacts"
                    options={{
                        tabBarLabel: "Contacts",
                        tabBarIcon: ({ color }) => (
                            <ICONS.ContactsIcon color={color} />
                        )
                    }}
                />
                <Tabs.Screen
                    name="chats"
                    options={{
                        tabBarLabel: "Chats",
                        tabBarIcon: ({ color }) => (
                            <ICONS.ChatsIcon color={color} />
                        )
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        tabBarLabel: "Profile",
                        tabBarIcon: ({ color }) => (
                            <ICONS.ProfileIcon color={color} />
                        )
                    }}
                />
                <Tabs.Screen
                    name="settings"
                    options={{
                        tabBarLabel: "Settings",
                        tabBarIcon: ({ color }) => (
                            <ICONS.SettingsIcon color={color} />
                        )
                    }}
                />
			</Tabs>
		</SafeAreaView>
	);
}
