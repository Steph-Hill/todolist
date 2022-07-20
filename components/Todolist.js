import { StyleSheet, Text, View, SafeAreaView,FlatList } from 'react-native'
import React, { useState } from 'react'
import { Input,Icon } from "@rneui/themed";
import { ListItem } from "@rneui/themed";



const initask = [

    {
        id:1,
        tache:"Faire à manger pour la petite"

    },
    {
        id:2,
        tache:"Se baigner à la riviere"

    },
    {
        id:3,
        tache:"trouver la petite"

    },



]

const Todolist = () => {

     /* Detection du contenue de l'input */

    const [getText, setText]=useState()

    /* Initialisation des  getters et setters taches
    pour la FlatList et l'utilisation de getTask mutable par le temps*/
    const [getTask, setTask]=useState(initask)

    /* Determine ce que contient l'input */
    
    const textChange = (textValue) => { 
        
        console.log('mon contenu :',textValue); /* mise a jour de la  valeur de mon texte */
        setText(textValue);
     }

     const ajouter = () => { 

        /* Verifie le contenu du getText avec l'action ajouter */
        console.log(getText);

        /*destructure le getTask  */
        setTask([...getTask,
            
            {id:getTask.length+1,
            tache:getText}

        ])
        
        setText()
      }

      /* composant headerTodo */
     
        const Swipe = () => { 
            

        return(

        <ListItem.Swipeable
        leftContent={(reset) => (
            <Button
            title="Info"
            onPress={() => reset()}
            icon={{ name: 'info', color: 'white' }}
            buttonStyle={{ minHeight: '100%' }}
            />
        )}
        rightContent={(reset) => (
            <Button
            title="Delete"
            onPress={() => reset()}
            icon={{ name: 'delete', color: 'white' }}
            buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
            />
        )}
        >
        <Icon name="My Icon" />
        <ListItem.Content>
            <ListItem.Title>Hello Swiper</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
        </ListItem.Swipeable>
    )

 }
  return (
   

      
     

            <SafeAreaView style={styles.container}>
            <FlatList
                data={getTask}
                renderItem={({item})=><Text>{item.tache}</Text>}
                keyExtractor={item => item.id}
                ListHeaderComponent={<Input
                                    placeholder='INPUT WITH ICON'
                                    onChangeText={textChange} // utilise la fonction fléchée textChange
                                    value={getText}
                                    
                                    rightIcon={<Icon
                                            name='chevron-right'
                                            size={40}
                                            color='green'
                                            onPress={ajouter}/* Action sur l'icon */
                                                    
                                    />}
            
            
                    />}
            />
            </SafeAreaView>

   
  )
}

export default Todolist

const styles = StyleSheet.create({})