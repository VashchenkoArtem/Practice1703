import { HeaderChats } from "@modules/chat";
import { HeaderContacts } from "@modules/contact";
import { HeaderProfile } from "@modules/profile";
import { HeaderSettings } from "@modules/settings";
import { COLORS, FONT_SIZE } from "@shared/constants";
import { Icons } from "@shared/ui";
import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
export default function TabLayout() {
    return (<Tabs screenOptions={{
            tabBarStyle: { backgroundColor: COLORS.bisqueSecondary },
            tabBarLabelStyle: {
                color: COLORS.black,
                fontSize: FONT_SIZE.small,
            },
            headerStyle: {
                backgroundColor: COLORS.bisquePrimary,
            },
        }}>
			<Tabs.Screen name="contacts" options={{
            title: "Contacts",
            tabBarLabel: "Contacts",
            tabBarIcon: ({ focused }) => (<Icons.ContactsIcon fill={focused ? COLORS.grey : COLORS.black}/>),
            header: () => <HeaderContacts />,
        }}/>
			<Tabs.Screen name="chats" options={{
            title: "Chats",
            tabBarLabel: "Chats",
            tabBarIcon: ({ focused }) => (<Icons.ChatsIcon fill={focused ? COLORS.grey : COLORS.black}/>),
            header: () => <HeaderChats />,
        }}/>
			<Tabs.Screen name="profile" options={{
            title: "Profile",
            tabBarLabel: "Profile",
            tabBarIcon: ({ focused }) => (<Icons.ProfileIcon fill={focused ? COLORS.grey : COLORS.black}/>),
            header: () => <HeaderProfile />,
        }}/>
			<Tabs.Screen name="settings" options={{
            title: "Settings",
            tabBarLabel: "Settings",
            tabBarIcon: ({ focused }) => (<Icons.SettingsIcon fill={focused ? COLORS.grey : COLORS.black}/>),
            header: () => <HeaderSettings />,
        }}/>
		</Tabs>);
}
