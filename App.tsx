// // flastlist

// import React, { useState } from 'react'
// import { FlatList, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native'

// type typeItem = {
//   id: string
//   title: string
// }

// type typePropItem = {
//   element: typeItem
//   selectId: string | undefined
//   setSelectId: React.Dispatch<React.SetStateAction<string | undefined>>
// }

// const Data: typeItem[] = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ]

// const Item = ({ element, selectId, setSelectId }: typePropItem) => {
//   return (
//     <TouchableOpacity
//       className={selectId === element.id ? 'bg-violet-300' : 'bg-pink-300'}
//       onPress={() => setSelectId(element.id)}
//     >
//       <Text>{element.title}</Text>
//     </TouchableOpacity>
//   )
// }

// const App = () => {
//   const [selectId, setSelectId] = useState<string>()

//   return (
//     <>
//       <StatusBar backgroundColor={'violet'} />
//       <SafeAreaView className="m-7">
//         <FlatList
//           data={Data}
//           renderItem={({ item }: { item: typeItem }) => {
//             return <Item element={item} selectId={selectId} setSelectId={setSelectId} />
//           }}
//         />
//       </SafeAreaView>
//     </>
//   )
// }

// export default App

/*********   imageBackground   ***********/

// import React from 'react'
// import { ImageBackground, Text } from 'react-native'

// const App = () => (
//   <ImageBackground
//     source={{ uri: 'https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg' }}
//     className="flex-1 justify-center "
//   >
//     <Text className="text-white font-bold text-5xl bg-red-400/60 text-center py-5">Inside</Text>
//   </ImageBackground>
// )

// export default App

/**********   KeyboardAvoidingView    *********** */

// import React from 'react'
// import {
//   View,
//   KeyboardAvoidingView,
//   TextInput,
//   StyleSheet,
//   Text,
//   Platform,
//   TouchableWithoutFeedback,
//   Button,
//   Keyboard,
// } from 'react-native'

// const KeyboardAvoidingComponent = () => {
//   return (
//     <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View style={styles.inner}>
//           <Text style={styles.header}>Header</Text>
//           <TextInput placeholder="Username" style={styles.textInput} />
//           <View style={styles.btnContainer}>
//             <Button title="Submit" onPress={() => null} />
//           </View>
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   inner: {
//     padding: 24,
//     flex: 1,
//     justifyContent: 'space-around',
//   },
//   header: {
//     fontSize: 36,
//     marginBottom: 48,
//   },
//   textInput: {
//     height: 40,
//     borderColor: '#000000',
//     borderBottomWidth: 1,
//     marginBottom: 36,
//   },
//   btnContainer: {
//     backgroundColor: 'white',
//     marginTop: 12,
//   },
// })

// export default KeyboardAvoidingComponent

import React, { useState } from 'react'
import { FlatList, Button, View } from 'react-native'
import ShowItem from './components/ShowItem'
import { itemShowContent } from './type/type'
import InputItem from './components/InputItem'

const App = () => {
  const [content, setContent] = useState<string>('')
  const [showContent, setShowContent] = useState<{ id: string; value: string }[]>([])
  const [isPopup, setIsPopup] = useState<boolean>(false)
  const handleAdd = () => {
    setShowContent((prev) => [...prev, { id: Math.random().toString(), value: content }])
    setContent('')
    setIsPopup((prev) => !prev)
  }

  const handleDelete = (id: string) => {
    setShowContent((prev) => {
      return prev.filter((item) => item.id !== id)
    })
  }

  return (
    <View className="p-5">
      <Button title={'Add New Goal'} onPress={() => setIsPopup((prev) => !prev)} />
      <InputItem
        content={content}
        setContent={setContent}
        handleAdd={handleAdd}
        isPopup={isPopup}
        setIsPopup={setIsPopup}
      />
      <FlatList
        data={showContent}
        renderItem={({ item }: itemShowContent) => <ShowItem item={item} handleDelete={handleDelete} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default App
