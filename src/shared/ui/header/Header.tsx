import { View, Text } from "react-native";
import { IProps } from "./types";
import { ICONS } from "../icons";
import { Input } from "../input";
import { styles } from "./style";

export function Headers(props:IProps){
    const {isIconLeft, isIconRight, isInput, text, search, setSearch } = props
    return (
        <View style = {styles.headersContainer}>
            <View style = {[styles.header]}>
                {isIconLeft && 
                    <ICONS.logoIcon width = {40} height = {40}/>
                }
                <Text style = {[styles.headerText, !isIconRight  && styles.headerTextWithoutIconRight]}>
                    { text}
                </Text>
                {isIconRight && 
                    <ICONS.plusIcon/>
                }
            </View>
            {isInput && 
                <Input.ChatInput
                    value = {search ? search : ""}
                    onChangeText={setSearch}
                />
                }       
        </View>)
}