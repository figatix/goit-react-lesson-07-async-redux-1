
import React, { useState } from "react";
import { StyledForm, StyledInput, StyledInputTitle, StyledLabel } from "./Form.styled";
import { StyledAddBtn } from "../ContactItem/ContactItem.styled";

import { useDispatch } from 'react-redux'
import { addNewContact } from "redux/contactSlice";


const ContactForm = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const dispatch = useDispatch()

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  }

  const handlerSubmitForm = (e) => {
    e.preventDefault();
    const newContact = {
      name,
      number,
    }

    dispatch(addNewContact(newContact))
    reset()
  }

  const reset = () => {
    setName('')
    setNumber('')
  }

  return (

    <StyledForm onSubmit={handlerSubmitForm}>
      <StyledLabel>
        <StyledInputTitle>Name of contact</StyledInputTitle>
        <StyledInput
          name="name"
          type="text"
          onChange={onChangeInput}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </StyledLabel>

      <StyledLabel>
        <StyledInputTitle>Number</StyledInputTitle>
        <StyledInput
          name="number"
          type="tel"
          value={number}
          onChange={onChangeInput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </StyledLabel>

      <StyledAddBtn type="submit">Add contact</StyledAddBtn>
    </StyledForm>
  )
}

export { ContactForm };

