import "./App.css";
import { Transition, CSSTransition } from "react-transition-group";
import { useState } from "react";

const duration = 1000;

const defaultStyle = {
  transition: `opacity${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: {
    opacity: 1,
    backgroundColor: "purple",
    height: "80px",
  },
  entered: {
    opacity: 1,
    backgroundColor: "red",
    height: "80px",
  },
  exiting: {
    opacity: 1,
    backgroundColor: "yellow",
    height: "80px",
  },
  exited: {
    opacity: 1,
    backgroundColor: "green",
    height: "80px",
  }
}

const FadeComponent = ({ in: inProps }) => {
  return (
    <Transition
      
      in={inProps}

      onEnter={(node) => {
        console.log("enter node", node)
      }}  

      onEntering={(node) => {
        console.log("entering node",node)
      }} 

      onExit={(node) => {
        console.log("exit node", node)
      }}  

      onExiting={(node) => {
        console.log("exiting node", node)
      }}  
    
      timeout={duration}>
      
      {state => (
         <div style={{
          ...defaultStyle,
           ...transitionStyles[state],
        }}>
          {JSON.stringify(state)}
                </div>
     )}
    </Transition>
  );
};

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
    
      React Animations <button onClick={() => { setShow(!show) }}>Başlat</button>
      
      <FadeComponent in={show} />

      <CSSTransition in={show} timeout={500} classNames="alert" > 
        <div>Merhaba Ben CSSTransition</div>
     </CSSTransition>


  </div>
  )
}

export default App;
