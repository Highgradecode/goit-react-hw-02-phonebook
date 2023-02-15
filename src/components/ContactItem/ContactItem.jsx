import { ContactItemWrapper } from "./ContactItem.styled"

export const ContactItem = ({name, number, deleteContact}) => 
<ContactItemWrapper><p> {name}: {number}</p><button type="button" onClick={deleteContact} >Delete</button></ContactItemWrapper>
