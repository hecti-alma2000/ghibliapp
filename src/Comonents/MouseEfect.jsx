import { useEffect, useState } from "react";
import '../stylesheet/mouseEfect.css';


export const MouseEfect = () => {
  const [active, setActive] = useState(false);
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  const handleClic = ()=>{
    setActive(!active);
  };

  useEffect(() => {

  const handleMove = (e) => {
    const { clientX, clientY } = e;
    setPosition({
      x: clientX,
      y:clientY
    });
  };


    if(active) {
      window.addEventListener('pointermove', handleMove);
    };

    return () => {
      window.removeEventListener('pointermove', handleMove);
    }
  }, [active]);
  
  return (
    <main>
      <div className={active ? '' : 'desactivada'} style = {{
      position: 'absolute',
      backgroundColor: '#09f',
      borderRadius: '50%',
      opacity: '0.3',
      pointerEvents: 'none',
      left: -15,
      top: -15,
      width: 30,
      height: 30, 
      transform: `translate(${position.x}px, ${position.y}px)`
    }} 
    />
      <button style={{minWidth: '200px'}} className='btn btn-default' onClick={handleClic}>{active ? 'Desactivar' : 'Activar'} EfectoMosue</button>
    </main>
  )
}
