import  { Component } from 'react'
import PropTypes from 'prop-types'
import { type Contact } from '../src/utils/dataContact'
import { getContacts, getUserLogged, putAccessToken } from '../src/libs/api/contact.service'

// 👇 Props shape (compile-time)
export interface ContactAppPageProps {
  /** optional page title */
  title?: string
}

// 👇 State shape (compile-time)
export interface ContactAppPageState {
  contacts:    Contact[]
  authedUser:  { id: string; email: string; name: string } | null
  initializing: boolean
}

// 👇 Runtime PropTypes (dev-warnings)
export const contactAppPagePropTypes = {
  title:     PropTypes.string,
}

export default class ContactAppPage
  extends Component<ContactAppPageProps, ContactAppPageState>
{
  static propTypes   = contactAppPagePropTypes
  static defaultProps: Partial<ContactAppPageProps> = {
    title: 'Contacts',
  }

  constructor(props: ContactAppPageProps) {
    super(props)
    // 📌 super(props) calls React.Component’s constructor,
    // making `this.props` available here.

    this.state = {
      contacts:     [],
      authedUser:   null,
      initializing: true,
    }

    // bind your handlers:
    this.onDeleteHandler      = this.onDeleteHandler.bind(this)
    this.onAddContactHandler  = this.onAddContactHandler.bind(this)
    this.onLoginSuccess       = this.onLoginSuccess.bind(this)
    this.handleLogout         = this.handleLogout.bind(this)
  }

  onDeleteHandler(id: number) {
      const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts });
  }

  onAddContactHandler({ name, tag }: Omit<Contact, 'id' | 'imageUrl'>) {
    this.setState((prevState: ContactAppPageState) => {
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
    console.log('AUTH USER',data);
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

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {/* …your JSX… */}
      </div>
    )
  }
}
