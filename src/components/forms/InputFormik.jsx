import React from 'react'
import { useField, useFormikContext } from 'formik'
import Input from './Input'
import { StyleSheet, Text, View } from 'react-native'

export default function InputFormik ({ name, required, validate, ...rest }) {
  const { submitCount } = useFormikContext()
  const validation = (required && !validate) ? validateRequired : validate
  const [field, meta, helpers] = useField({ name, validate: validation, ...rest })
  const showError = submitCount > 0 && meta.error
  const handleChange = (newValue) => helpers.setValue(newValue)

  return (
    <View>
      <Input
        placeholder={rest.placeholder}
        icon={rest.icon}
        value={field.value}
        name={field.name}
        onChangeText={handleChange}
        {...rest}
      />
      { showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  )
}

export const validateRequired = (value) => {
  let error
  if (!value || (typeof (value) === 'string' && value.trim() === '')) {
    error = 'Este campo es obligatorio.'
  }
  return error
}

const styles = StyleSheet.create({
  errorText: {
    color: '#bb2424',
    fontWeight: 'bold',
    marginBottom: 10
  }
})
