import { StyleSheet, Text, View, SafeAreaView, FlatList, Button, TextInput} from 'react-native'
import React, {useState}from 'react'
import Swipe from './Swipe'

const initTask = [

    {
        id:1,
        tache : 'aller à grand riviere'
    },
    {
        id:2,
        tache : 'Faire un repas economique'
    },
]


const Taches = () => {

    const [tasks, setTasks]= useState(initTask)
    
    const [valText, setText] = useState()

    const HeaderTodo = () => {
        return(

                <View>

                        <TextInput
                        style={styles.input}
                        onChange={setText}
                        value={valText}
                        
                        />



                </View>
        )
     }

       /* Fonction qui créé l'action pour ajouter */
       const ajouter = () => { 
        
        console.log('first',tasks.length) //permet de connaitre le nombre avec length
        //ajout dynamiquement une tache
        setTasks ([
            ...tasks,
            {
                id: tasks.length+1, //ajoute un id avec le calcule suivant : nombre d'objets du tableau + 1
                tache:valText
            
            }
        ]),
        setText("")/* remise a zero */
        
        
      }
  return (
    <SafeAreaView>
     
    <FlatList
       data={tasks}
       renderItem={({item})=><Text>{item.tache}</Text>}
       ListHeaderComponent={<HeaderTodo/>} //ajout de mon header
       ListEmptyComponent={<Swipe/>}
       keyExtractor={item => item.id}
     />
   </SafeAreaView>
  )
}

export default Taches

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
})