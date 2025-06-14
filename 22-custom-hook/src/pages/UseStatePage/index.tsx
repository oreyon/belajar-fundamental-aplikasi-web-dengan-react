import Todo from "../../components/views/UseStateView/Todo"
import ToggleLamp from "../../components/views/UseStateView/ToggleLamp"

const UseStatePage = () => {
  return (
    <>
      <h1>
        Latihan <code>useState()</code>
      </h1>
      <section>
        <h2>
          Kasus 1: <code>ToggleLamp</code> Component
        </h2>
        <p>Nyalakan lampu untuk melihat pesan.</p>
        <ToggleLamp />
      </section>
      <section>
        <h2>
          Kasus 2: <code>Todo</code> Component
        </h2>
        <Todo />
      </section>
    </>
  )
}

export default UseStatePage