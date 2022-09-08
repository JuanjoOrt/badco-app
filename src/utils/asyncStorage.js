import AsyncStorage from '@react-native-async-storage/async-storage'

export const setItem = async (key, value) => { await AsyncStorage.setItem(key, value) }
export const getItem = async (key) => await AsyncStorage.getItem(key)
export const removeItem = async (key) => await AsyncStorage.removeItem(key)
