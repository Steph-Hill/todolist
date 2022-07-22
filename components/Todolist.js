import { StyleSheet, Text, View, SafeAreaView,FlatList } from 'react-native'
import React, { useState } from 'react'
import { Input,Icon,ListItem,Button,SpeedDial } from "@rneui/themed";

import Swipe from './Swipe';
import DialogInput from 'react-native-dialog-input';


const initask = [

    



]

const Todolist = () => {

     /* Detection du contenue de l'input */

    const [getText, setText]=useState()

    /* Initialisation des  getters et setters taches
    pour la FlatList et l'utilisation de getTask mutable par le temps*/
    const [getTask, setTask]=useState(initask)

    const [open, setOpen] = React.useState(false);

    const [openDialog, setOpenDialog] = React.useState(false);




    /* Determine ce que contient l'input */
    
    const textChange = (textValue) => { 
        
        console.log('mon contenu :',textValue); /* mise a jour de la  valeur de mon texte */
        setText(textValue);
     }

     const ajouter = (textValue) => { 

        /* Verifie le contenu du getText avec l'action ajouter */
        console.log(getText);

        if (textValue != "" ) { //controle si le input n'est pas vide pour ajouter
            
        
        /*destructure le getTask  */
        setTask([
            
            {id:getTask.length+1,
            tache:textValue},
                ...getTask,
        ])
       /* remise a zero a mon formulaire */ 
        setText("")
      }
}
      const supprimer = (id) => { 
        
        console.log('je supprime',id);

        /* filtre en selectionnant tous les elements différents de l'id cible */
        const filterTask = getTask.filter(item=>item.id != id);

        console.log(filterTask);
        

        setTask(filterTask);

       }

     
     
        
  return (
   

      
     

            <SafeAreaView style={styles.container}>
            <FlatList
                data={getTask}
                renderItem={({item})=><Swipe tache={item.tache} id={item.id} SuppCallBack={supprimer}/>}
                keyExtractor={item => item.id}
                ListEmptyComponent={()=><Text style={styles.flatText}>tête mulet !  <Icon
                                                                                            name='sentiment-dissatisfied'
                                                                                            color={'#FFFFFF'}
                                                                                        /></Text>}
                ListHeaderComponent={<Input
                                    placeholder='Ajout de tâhes'
                                    onChangeText={textChange} // utilise la fonction fléchée textChange
                                    value={getText}
                                    
                                    rightIcon={<Icon
                                            name='medical-services'
                                            size={30}
                                            color='green'
                                            onPress={ajouter}/* Action sur l'icon */
                                                    
                                    />
                                
                                }
                                    
            
            
                    />}
            />

                <DialogInput 
                            backgroundColor='rgba(191, 28, 112, 1)'
                            isDialogVisible={openDialog}
                            title={"DialogInput 1"}
                            message={"Message for DialogInput #1"}
                            hintInput ={"HINT INPUT"}
                            submitInput={ (inputText) => {ajouter(inputText)} }
                            closeDialog={ () => setOpenDialog(!openDialog)}>
                </DialogInput>

                <SpeedDial 
                overlayColor='rgba(191, 28, 112, 0)'
                style={{height:755,
                                    paddingHorizontal:20,
                                    }}
                                    
                isOpen={open}
                icon={{ name: 'edit', color: '#fff' }}
                openIcon={{ name: 'close', color: '#fff'}}
                onOpen={() => setOpenDialog(!openDialog)}
                onClose={() => setOpen(!open)}
                >
                
               
                </SpeedDial>
            </SafeAreaView>
            

   
  )
}

export default Todolist

const styles = StyleSheet.create({

    flatText:{
        backgroundColor:'red',
        flex:10,
        paddingVertical:20,
        textAlign:'center',
        fontSize:19,
        bottom:25,
        shadowRadius:10





    }
})