import  { useState } from 'react';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';

/**
 * @todo
 * ubahlah implementasi stateful component dari class ke function
 * dengan memanfaatkan useState().
 */

const ToggleLamp = () => {
  const [lamp, setLamp] = useState<'on'|'off'>('off');

  const toggleLamp = () => {
    setLamp((prevLamp: 'on' | 'off') => (prevLamp === 'off' ? 'on' : 'off'));
  };

  return (
    <div className={lamp}>
        <button type={"button"} onClick={toggleLamp}>{lamp === 'on' ? <FaLightbulb /> : <FaRegLightbulb />}</button>
        <h3>Hooks keren!</h3>
      </div>
  )
}


export default ToggleLamp;
