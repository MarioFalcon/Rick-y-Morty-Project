import { FC, memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  Container,
  Form,
  Input,
  InputController,
  Label,
  ButtonContainer,
  Back,
  Error,
} from './createFormStyles'
import { Formik } from 'formik'
import { InitialValues, ValidationSchema } from './constants'
import useLogic from './logic'
import Footer from '../../components/Footer/footer'
import VideoBackground from '../../components/VideoBackground/videoBackground'

const CreateForm: FC = () => {
  const { handleCreate } = useLogic()
  const navigate = useNavigate()

  const handleGoToBack = useCallback(() => {
    navigate('/characters')
  }, [navigate])

  return (
    <Container>
      <Back onClick={handleGoToBack}>Back</Back>
      <VideoBackground videoSrc="/realism.mp4" />
      <ButtonContainer></ButtonContainer>
      <Formik
        initialValues={InitialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleCreate}
      >
        {({ handleSubmit, handleChange, values, errors, isValid }) => (
          <Form onSubmit={handleSubmit}>
            <InputController>
              <Label $hasError={!!errors?.name}>Name</Label>
              <Input
                $hasError={!!errors?.name}
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
              />
              {errors?.name && <Error>{errors?.name}</Error>}
            </InputController>
            <InputController>
              <Label $hasError={!!errors?.species}>Species</Label>
              <Input
                $hasError={!!errors?.species}
                type="text"
                name="species"
                onChange={handleChange}
                value={values.species}
              />
              {errors?.species && <Error>{errors?.species}</Error>}
            </InputController>

            <InputController>
              <Label $hasError={!!errors?.status}>Status</Label>
              <Input
                $hasError={!!errors?.status}
                type="text"
                name="status"
                onChange={handleChange}
                value={values.status}
              />
              {errors?.status && <Error>{errors?.status}</Error>}
            </InputController>

            <button type="submit" disabled={!isValid}>
              Create Characters
            </button>
          </Form>
        )}
      </Formik>
      <Footer />
    </Container>
  )
}

export default memo(CreateForm)
