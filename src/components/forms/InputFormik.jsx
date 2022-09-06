import React from 'react'
import { useField } from 'formik'
import Input from './Input'

export default function InputFormik ({ name, required, validate, ...rest }) {
  const validation = (required && !validate) ? validateRequired : validate
  const [field,, helpers] = useField({ name, validate: validation, ...rest })
  const handleChange = (newValue) => helpers.setValue(newValue)

  return <Input
    placeholder={rest.placeholder}
    icon={rest.icon}
    value={field.value}
    name={field.name}
    onChangeText={handleChange}
    {...rest}
  />
}

export const validateRequired = (value) => {
  let error
  if (!value || (typeof (value) === 'string' && value.trim() === '')) {
    error = 'Este campo es obligatorio.'
  }
  return error
}
