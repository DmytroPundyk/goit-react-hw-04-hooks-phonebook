import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, DeleteButton } from './ContactList.styled';

const ContactList = ({ contacts, onRemoveContact }) => (
  <List>
    {contacts.map(contact => (
      <Item key={contact.id}>
        {contact.name + ' : ' + contact.number}
        {
          <DeleteButton
            type="button"
            name="delte"
            onClick={() => onRemoveContact(contact.id)}
          >
            Delete
          </DeleteButton>
        }
      </Item>
    ))}
  </List>
);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
export default ContactList;
