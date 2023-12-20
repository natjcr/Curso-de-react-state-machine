import React from "react";
import { useMachine } from "@xstate/react";
import bookingMachine from "../Machines/bookingMachine.jsx";
import { Nav } from "../Components/Nav.jsx";
import { StepsLayout } from "./StepsLayout.jsx";
import './BaseLayout.css'

export const BaseLayout = () => {
    const [state, send] = useMachine(bookingMachine);
  
    console.log('nuestra maquina', state.value, state.context);
  
    return (
      <div className='BaseLayout'>
        <Nav state={state} send={send} />
        <StepsLayout state={state} send={send}/>
      </div>
    );
  }