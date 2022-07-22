import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Input,Icon,ListItem,Button } from "@rneui/themed";


const Swipe = ({tache,id,SuppCallBack}) => { 
        
    return(

<ListItem.Swipeable

        rightContent={(reset) => (
                <Button
                title="Nettoyage"
                onPress={()=>SuppCallBack(id)}
                icon={{ name: 'clean-hands', color: 'white' }}
                buttonStyle={{ minHeight: '100%', backgroundColor: 'orange' }}
                />
        )}
>
        <Icon name="masks" />
            <ListItem.Content>
            <ListItem.Title>{tache}</ListItem.Title>
            </ListItem.Content>
<ListItem.Chevron />
</ListItem.Swipeable>

    )


   }

export default Swipe

const styles = StyleSheet.create({})