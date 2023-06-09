import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup } from '../../../services/firebase/auth'
import { setToken } from '../../../services/storage/token'
import { setUserInfo } from '../../../services/storage/user'
import { updateProfile } from 'firebase/auth'
import { Props } from './types'

const useLogic = (onSignup: Props['onSignup']) => {
  const navigate = useNavigate()

  const handleOnSubmit = useCallback(
    async (values: {
      email: string
      password: string
      displayName: string
      phoneNumber: string
    }) => {
      try {
        const user = await signup(values.email, values.password)
        console.log(user)
        if (user) {
          await updateProfile(user, {
            displayName: values.displayName,
          })
          setUserInfo(user.providerData)
          const token = await user.getIdToken()
          setToken(token)
          onSignup()
          navigate('/selection')
        }
      } catch (e) {
        console.log(e)
      }
    },
    [navigate, onSignup]
  )
  return {
    handleOnSubmit,
  }
}

export default useLogic