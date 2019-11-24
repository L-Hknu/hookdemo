import React from "react";
import { ContextProvider } from "./reducer";
import Counter from "./Counter";
import CounterTest from "./CounterTest";
import Input from "./input";

 const Home = () => {
  return (
    <div className="App">
      <ContextProvider>
        <Counter />
        <CounterTest />
        <Input></Input>
      </ContextProvider>
    </div>
  );
};



export default Home