HTML Attributes Cheatsheet for TypeScript

A comprehensive reference for HTML attribute types in TypeScript, especially for use in React/JSX environments.
Global HTML Attributes

These attributes can be applied to all HTML elements. They are generally found within React.HTMLAttributes<T>.

    accessKey (string): Specifies a shortcut key to activate or focus an element.

    className (string): Specifies one or more class names for an element (note the camelCase in JSX).

    contentEditable (boolean | "inherit"): Specifies whether the content of an element is editable.

    dir ("ltr" | "rtl" | "auto"): Specifies the text direction for the content.

    draggable (boolean): Specifies whether an element is draggable.

    hidden (boolean): Specifies that an element is not yet, or is no longer, relevant.

    id (string): Specifies a unique id for an element.

    lang (string): Specifies the language of the element's content.

    style (React.CSSProperties): Specifies an inline CSS style for an element.

    tabIndex (number): Specifies the tabbing order of an element.

    title (string): Specifies extra information about an element, often shown as a tooltip.

Form and Input Attributes

Specific to form and input elements, primarily defined in React.InputHTMLAttributes<HTMLInputElement>.

    autoComplete (string): Specifies whether an input field should have autocomplete enabled.

    autoFocus (boolean): Specifies that an input field should automatically get focus when the page loads.

    checked (boolean): Specifies whether an <input type="checkbox"> or <input type="radio"> is checked.

    disabled (boolean): Specifies that an input element should be disabled.

    form (string): Specifies the form the element belongs to.

    maxLength (number): Specifies the maximum number of characters allowed.

    minLength (number): Specifies the minimum number of characters required.

    multiple (boolean): Specifies that the user can enter more than one value.

    name (string): Specifies the name of an input element.

    placeholder (string): Specifies a short hint that describes the expected value.

    readOnly (boolean): Specifies that an input field is read-only.

    required (boolean): Specifies that an input field must be filled out.

    type (string): Specifies the type of an <input> element.

    value (string | number | readonly string[]): Specifies the value of an <input> element.

Event Handler Attributes

These define functions to run in response to user interactions. T is a generic parameter for the specific HTML element type (e.g., HTMLInputElement).

    onClick (React.MouseEvent<T>): Fires when the user clicks on an element.

    onChange (React.ChangeEvent<T>): Fires when the value of an element has been changed.

    onFocus (React.FocusEvent<T>): Fires when an element gets focus.

    onBlur (React.FocusEvent<T>): Fires when an element loses focus.

    onSubmit (React.FormEvent<T>): Fires when a form is submitted.

    onKeyDown (React.KeyboardEvent<T>): Fires when a user is pressing a key.

    onKeyUp (React.KeyboardEvent<T>): Fires when a user releases a key.

    onMouseEnter (React.MouseEvent<T>): Fires when the pointer is moved onto an element.

    onMouseLeave (React.MouseEvent<T>): Fires when the pointer is moved out of an element.

Media Attributes

Used with media elements like <img>, <audio>, and <video>.

    src (string): Specifies the URL of the media file (<img>, <audio>, <video>, etc.).

    alt (string): Specifies an alternate text for an image (<img>, <area>, <input>).

    height (number | string): Specifies the height of the element (<img>, <video>).

    width (number | string): Specifies the width of the element (<img>, <video>).

    autoPlay (boolean): Specifies that the media will start playing as soon as it is ready (<audio>, <video>).

    controls (boolean): Specifies that media controls should be displayed (<audio>, <video>).

    loop (boolean): Specifies that the media will start over again when finished (<audio>, <video>).

    muted (boolean): Specifies that the audio output should be muted (<audio>, <video>).

ARIA and Data Attributes

    ARIA Attributes (aria-): Used to make web content more accessible. All aria-* attributes are typed as string | undefined in TypeScript. Example: aria-label="Close".

    Data Attributes (data-): Used to store custom data private to the page. All data-* attributes are typed as string | undefined. Example: data-testid="main-content".

Extending Types for Custom Attributes

To use non-standard attributes without TypeScript errors, you can extend React's attribute interfaces using declaration merging. Create a .d.ts file (e.g., global.d.ts) and add the following:

declare namespace React {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // Add your custom attributes here.
    // For example, for a 'my-custom-attribute':
    'my-custom-attribute'?: string;
  }
}
