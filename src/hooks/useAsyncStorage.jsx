import AsyncStorage from '@react-native-async-storage/async-storage'

export default function useAsyncStorage () {
  const setItem = async (key, value) => await AsyncStorage.setItem(key, value)
  const getItem = async (key) => await AsyncStorage.getItem(key)

  return { setItem, getItem }
}
