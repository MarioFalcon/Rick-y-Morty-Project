import { object, string } from 'yup'
export const InitialValues = {
  id: '',
  name: '',
  species: '',
  status: '',
}

export const ValidationSchema = object({
  name: string().required(),
  species: string().required(),
  status: string().required(),
})
