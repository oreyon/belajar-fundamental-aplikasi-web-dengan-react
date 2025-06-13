import PropTypes from 'prop-types'
import  { Component } from 'react'
import { ThemeProvider } from '../../contexts/ThemeContext'
import ToggleTheme from '../../components/layouts/ToggleTheme';

type PropTypes = object;

interface StateTypes {
  theme: string;
  toggleTheme: () => void;
}

export class ThemeAppPage extends Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props);

    this.state = {
      // take the theme from localStorage or default to 'light'
      theme: localStorage.getItem('theme') || 'light',

      toggleTheme: () => {
        this.setState((prevState: Readonly<StateTypes>) => {
          // Toggle theme between 'light' and 'dark'
          const updateTheme = prevState.theme === 'light' ? 'dark' : 'light';
          // store the theme in localStorage
          localStorage.setItem('theme', updateTheme);

          // Update the state with the new theme
          return {
            theme: updateTheme,
          }
        });
      }
    }
  }

  componentDidMount(): void {
    // Set the initial theme based on localStorage
    document.documentElement.setAttribute('data-theme', this.state.theme);
  }

  componentDidUpdate(prevProps: Readonly<PropTypes>, prevState: Readonly<StateTypes>){
      if (prevState.theme !== this.state.theme) {
        document.documentElement.setAttribute('data-theme', this.state.theme);
      }
  }

  render() {
    return (
      <ThemeProvider value={this.state}>
        <div className={"container justify-center items-center flex flex-col"}>
          <ToggleTheme/>
          <p>Hello, {this.state.theme === 'light' ? 'Early Bird' : 'NIght Owl'}.</p>
        </div>
      </ThemeProvider>
    )
  }
}

export default ThemeAppPage