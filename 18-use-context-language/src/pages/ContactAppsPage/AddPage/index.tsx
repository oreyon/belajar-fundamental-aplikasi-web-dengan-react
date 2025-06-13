import { useNavigate } from "react-router-dom"
import { type Contact } from "../../../utils/dataContact";
import ContactInput from "../../../components/organism/ContactInput";
import { addContact } from "../../../libs/api/contact.service";


const AddPageContact = () => {
  const navigate = useNavigate();

  async function handleAddContact({name, tag}: Omit<Contact, 'id' | 'imageUrl'>) {
    const contact: Contact = {
      id: +new Date(),
      name,
      tag,
      imageUrl: '/images/default.jpg',
    };
    await addContact(contact);
    navigate("/");
  }

  return (
    <section>
      <h2>Tambah Kontak</h2>
      <ContactInput addContact={handleAddContact} />
    </section>
  )
}

export default AddPageContact