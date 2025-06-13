import { useNavigate } from "react-router-dom"
import { type Contact } from "../../../utils/dataContact";
import ContactInput from "../../../components/organism/ContactInput";
import { addContact } from "../../../libs/api/contact.service";
import { useContext } from "react";
import LanguageContext from "../../../contexts/LanguageContext";


const AddPageContact = () => {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);

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
      <h2>{language === 'id' ? 'Tambah Kontak' : 'Add Contact'}</h2>
      <ContactInput addContact={handleAddContact} />
    </section>
  )
}

export default AddPageContact;