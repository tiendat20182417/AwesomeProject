import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { propShowItem } from '../type/type'

const ShowItem = ({ item, handleDelete }: propShowItem) => {
  return (
    <TouchableOpacity className="bg-violet-400 my-4 border-2 h-9 w-full " onPress={() => handleDelete(item.id)}>
      <Text className="ml-4">{item.value}</Text>
    </TouchableOpacity>
  )
}

export default ShowItem
