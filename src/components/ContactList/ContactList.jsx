import { ContactListWrapper } from "./ContactList.styled";

import { ContactItem } from "components/ContactItem/ContactItem";

export const ContactList = ({contacts, deleteContact}) => {
    return(
        <ContactListWrapper>
        {contacts.map( ({id, name, number}) => {
          return(
            <ContactItem 
            key={id} 
            name={name} 
            number={number}
            deleteContact={()=>(deleteContact(id))}
            />
          );
        })}
        </ContactListWrapper>
    )
}