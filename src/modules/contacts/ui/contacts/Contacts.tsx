import { View, Text, TouchableOpacity } from "react-native"
import { ContactCard } from "../contactCard/ContactCard"
import { useGetUsersQuery } from "@modules/contacts/api/contactsApi"
import { FlatList } from "react-native"
import { Headers } from "@shared/ui/header/Header"
import { useState } from "react"
import { IContact } from "@modules/contacts/api/contacts.types"

export function ContactsPage(){
    const [ search, setSearch ] = useState<string | null>(null)
    const { data } = useGetUsersQuery(undefined, {
        pollingInterval: 3000
    })
    if (!data) return null
    let filteredContacts = [] as IContact[]
    if ( search) {
        filteredContacts = data.filter((contact) => {
            return contact.localName.toLowerCase().includes(search.toLowerCase())
        })
        
    }
    return (
        <>
            <Headers text = "Contacts" isIconLeft={true} isIconRight={true} isInput={true} setSearch={setSearch} search={search}/>
            <FlatList style = {{paddingHorizontal: 10, paddingVertical: 5, gap: 5}} 
                data={ search ? filteredContacts : data}
                renderItem={(contact) => (
                    <View key={contact.item.id}>
                        <TouchableOpacity onPress={() => console.log("touched")}>
                            <ContactCard localName={contact.item.localName} avatar={contact.item.avatar} addedAt={contact.item.addedAt}/>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={contact => String(contact.id)}
                
            >
                {/* {data.map((contact)=>{
                    return (

                    )
                })} */}
            </FlatList>
        </>
    )
}