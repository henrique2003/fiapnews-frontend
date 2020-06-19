import React, { FormEvent, useState } from 'react'
import { StyledForm, Group } from './style'
import { toast } from 'react-toastify'
import api from '../../services/api'

const Form: React.FC = () => {
  const [Title, setTitle] = useState<string>('')
  const [Description, setDescription] = useState<string>('')

  const onSubmit = async (e: FormEvent): Promise<void | boolean> => {
    try {
      e.preventDefault()

      setTitle(Title.trim())
      setDescription(Description.trim())
      if (Title.length === 0 || Description.length === 0) {
        toast.error('Campo em branco')
        return false
      }

      await api.post('/post', { title: Title, message: Description })

      toast.success('Enviado com sucesso', {
        className: 'toast-success'
      })
    } catch (error) {
      toast.error('Aquí é segurança, Vacilao')
    }
  }

  return (
    <StyledForm onSubmit={async e => await onSubmit(e)}>
      <Group>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          name="title"
          value={Title}
          placeholder="Ex: Fiap cancela aula devido ao covid-19"
          required
          onChange={e => setTitle(e.target.value)}
        />
      </Group>
      <Group>
        <label htmlFor="description">Matéria:</label>
        <textarea
          name="description"
          value={Description}
          placeholder="Escreva sua  história aqui, nossa equipe fará o possível para que este fato seja contado o mais rápido possível. Digite a vontade :)"
          required
          onChange={e => setDescription(e.target.value)}
        ></textarea>
      </Group>
      <section>
        <button type="submit">Enviar</button>
      </section>
    </StyledForm>
  )
}

export default Form
