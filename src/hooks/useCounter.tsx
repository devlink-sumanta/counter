import { useRef, useState } from "react";

const useCounter = () => {
    const [counter,setCounter] = useState(0);
    const [isCounterRunning,setCounterRunning] = useState(false);
    const counterRef = useRef<NodeJS.Timeout | null>(null);

    const invokeStart = () =>{
        if(isCounterRunning) return;
        setCounterRunning(true);
        counterRef.current = setInterval(()=>{
            setCounter((prevCounter) => prevCounter + 1);
        },1000)
    }

    const invokePause = () => {
        setCounterRunning(false);
        if(!counterRef.current) return;
        clearInterval(counterRef.current);
        counterRef.current = null;
    }

    const invokeReset = () => {
        setCounterRunning(false);
        setCounter(0);
        if(!counterRef.current) return;
        clearInterval(counterRef.current);
        counterRef.current = null;
    }

    return {counter,isCounterRunning, invokeStart, invokePause, invokeReset};
};

export default useCounter;