import { Component} from "react";
import {  type Contact } from "../../utils/dataContact";
import Navigation from "../../components/layouts/Navigation";
import { Route, Routes } from "react-router-dom";
import HomePageWrapper from "./HomePage";
import AddPageContact from "./AddPage";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import { getContacts, getUserLogged, putAccessToken } from "../../libs/api/contact.service";
import { LanguageProvider, type Language } from "../../contexts/LanguageContext";

type PropTypes = object;

type AuthedUser = {
  id: string;
  email: string;
  name: string;
}

interface StateTypes {
  contacts: Contact[];
  authedUser: AuthedUser | null;
  initializing: boolean;
  languageContext: {
    language: Language;
    toggleLanguage: () => void;
  }
}

class ContactAppPage extends Component<PropTypes,StateTypes> {
  constructor(props: PropTypes) {
    super(props);

    this.state = {
      contacts: [],
      authedUser: null,
      initializing: true,
      languageContext: {
        language: localStorage.getItem('locale') as Language || 'id',
        toggleLanguage: () => {
          this.setState((prevState: StateTypes) => {
            const activeLanguage = prevState.languageContext.language === 'id' ? 'en' : 'id';
            localStorage.setItem('locale', activeLanguage);
            return {
              languageContext: {
                ...prevState.languageContext,
                language: activeLanguage,
              }
            }
          })
        }
      }
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  onDeleteHandler (id: number) {
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts });
  }

  onAddContactHandler({name, tag}: Omit<Contact, 'id' | 'imageUrl'>) {
    this.setState((prevState: StateTypes) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            name,
            tag,
            imageUrl: '/images/default.jpg',
          }
        ]
      }
    })
  }

  async onLoginSuccess({ accessToken }: { accessToken: string }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    
    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  handleLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      }
    })

    putAccessToken('');
  }

  async componentDidMount() {
    const { data: authedUser } = await getUserLogged();
    const contactsResponse = await getContacts();
    this.setState(() => {
      return {
        authedUser,
        initializing: false,
        contacts: contactsResponse.data || [],
      }
    })
  }

  render(){
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <LanguageProvider value={this.state.languageContext}>
          <div className='contact-app'>
              <header className='contact-app__header'>
                <h1>{this.state.languageContext.language === 'id' ? 'Aplikasi Kontak' : 'Contacts App'}</h1>
              </header>
              <main>
                <Routes>
                  <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                  <Route path="/register" element={<RegisterPage/>} />
                </Routes>
              </main>
            </div>
        </LanguageProvider>
      );
    }


      return (
        <LanguageProvider value={this.state.languageContext}>
            <div className="contact-app">
              <header className="contact-app__header">
                <h1>{this.state.languageContext.language === 'id' ? 'Aplikasi Kontak' : 'Contacts App'}</h1>
                <Navigation name={this.state.authedUser.name} onLogout={this.handleLogout}/>
              </header>

              <main>
                <Routes>
                  <Route path="/" element={<HomePageWrapper/>}/>
                  <Route path="/add" element={<AddPageContact/>} />
                </Routes>
            </main>
          </div>
        </LanguageProvider>
      )
  }
}

export default ContactAppPage;