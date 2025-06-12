
# 🧩 React + TypeScript Cheatsheet: HTML Attributes & Events

---

## 📌 1. Common HTML Attributes

| HTML Attribute         | TypeScript Type                  | Example                                  |
|------------------------|----------------------------------|------------------------------------------|
| `className`            | `string`                         | `<div className="container" />`         |
| `id`                   | `string`                         | `<input id="email" />`                  |
| `style`                | `React.CSSProperties`            | `<div style={{ color: 'red' }} />`      |
| `title`                | `string`                         | `<img title="Logo" />`                  |
| `role`                 | `string`                         | `<div role="button" />`                 |
| `tabIndex`             | `number`                         | `<button tabIndex={0} />`               |
| `disabled`             | `boolean`                        | `<button disabled />`                   |
| `hidden`               | `boolean`                        | `<div hidden />`                        |
| `type` (input/button)  | `'text' \| 'number' \| ...`     | `<input type="text" />`                 |
| `value`                | `string \| number`               | `<input value={inputValue} />`          |
| `checked`              | `boolean`                        | `<input checked={isChecked} />`         |

---

## 📌 2. Event Handlers (onX)

| Event Type         | TypeScript Type                                      | Example                                           |
|--------------------|------------------------------------------------------|---------------------------------------------------|
| `onClick`          | `(event: React.MouseEvent<HTMLElement>) => void`     | `<button onClick={handleClick} />`               |
| `onChange`         | `(event: React.ChangeEvent<HTMLInputElement>) => void`| `<input onChange={handleChange} />`              |
| `onSubmit`         | `(event: React.FormEvent<HTMLFormElement>) => void`  | `<form onSubmit={handleSubmit} />`               |
| `onKeyDown`        | `(event: React.KeyboardEvent<HTMLInputElement>) => void` | `<input onKeyDown={handleKeyDown} />`        |
| `onFocus`          | `(event: React.FocusEvent<HTMLInputElement>) => void` | `<input onFocus={handleFocus} />`            |
| `onBlur`           | `(event: React.FocusEvent<HTMLInputElement>) => void` | `<input onBlur={handleBlur} />`              |
| `onMouseEnter`     | `(event: React.MouseEvent<HTMLElement>) => void`     | `<div onMouseEnter={handleHover} />`             |
| `onMouseLeave`     | `(event: React.MouseEvent<HTMLElement>) => void`     | `<div onMouseLeave={handleLeave} />`             |
| `onInput`          | `(event: React.FormEvent<HTMLInputElement>) => void` | `<input onInput={handleInput} />`               |

---

## 📌 3. Keyboard Events

| Event Type         | TypeScript Type                                           |
|--------------------|-----------------------------------------------------------|
| `onKeyDown`        | `(e: React.KeyboardEvent<HTMLInputElement>) => void`      |
| `onKeyPress`       | `(e: React.KeyboardEvent<HTMLInputElement>) => void` _(Deprecated)_ |
| `onKeyUp`          | `(e: React.KeyboardEvent<HTMLInputElement>) => void`      |

---

## 📌 4. Form Elements & Their Events

| Element     | Event Types                                               |
|-------------|------------------------------------------------------------|
| `<input />` | `onChange`, `onInput`, `onFocus`, `onBlur`, `onKeyDown`   |
| `<select>`  | `onChange`, `onBlur`, `onFocus`                            |
| `<textarea>`| `onChange`, `onFocus`, `onBlur`                            |
| `<form>`    | `onSubmit`                                                |

**Example:**

```tsx
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};
```

---

## 📌 5. Ref and DOM Access

```tsx
const inputRef = useRef<HTMLInputElement>(null);

useEffect(() => {
  inputRef.current?.focus();
}, []);
```

---

## 📌 6. Useful Utility Types

| Type                             | Usage Example                                           |
|----------------------------------|---------------------------------------------------------|
| `React.FC<Props>`                | Functional component                                    |
| `React.ChangeEvent<T>`          | Input change handlers                                   |
| `React.MouseEvent<T>`           | Click/hover handlers                                    |
| `React.KeyboardEvent<T>`        | Keyboard interaction                                    |
| `React.FormEvent<T>`            | Form submission/field entry                             |

---

## 📌 7. Custom Event Handler Function Example

```tsx
const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
  const value = (e.target as HTMLInputElement).value;
  console.log(value);
};
```

---

## ✅ Pro Tips

- Always annotate event parameter types explicitly for clarity and better IntelliSense.
- Use union types for specific `type` props:

  ```tsx
  type ButtonType = 'button' | 'submit' | 'reset';
  ```

- Use `as` cautiously when narrowing types (e.g., `e.target as HTMLInputElement`).
