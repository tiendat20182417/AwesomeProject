import React from 'react'
import { View, TextInput, Modal, Pressable, Text } from 'react-native'
import { propInputItem } from '../type/type'
const InputItem = ({ content, setContent, handleAdd, isPopup, setIsPopup }: propInputItem) => {
  return (
    <Modal visible={isPopup}>
      <View className=" flex-1  items-center justify-center ">
        <TextInput
          className="border-2 w-[70%] "
          placeholder="Course Goal"
          value={content}
          onChangeText={(text) => setContent(text)}
        />
        <View className="mt-7 flex-row ">
          <Pressable onPress={handleAdd} className="bg-cyan-600 justify-center items-center w-20 h-10 mr-7">
            <Text className="text-white font-extrabold">ADD</Text>
          </Pressable>
          <Pressable
            onPress={() => setIsPopup((prev) => !prev)}
            className="bg-red-500 justify-center items-center w-20"
          >
            <Text className="text-white font-extrabold">CANCEL</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

export default InputItem
