import useCounter from "../hooks/useCounter";

const TimerComponent = () => {
    const {counter,isCounterRunning, invokeStart, invokePause, invokeReset} = useCounter();

    const handleInvokeCounter=() => {
        if(isCounterRunning) return invokePause();
        return invokeStart()
    }
    return (
        <div style={{display: "flex", justifyContent: "center", flexDirection:"column", width:"30%"}}>
            <h2>Counter: {counter}</h2>
            <div style={{display: "flex", justifyContent:"center"}}>
                <button onClick={handleInvokeCounter}>{isCounterRunning ? "Pause":"Start"}</button>
                <button onClick={invokeReset}>Reset</button>
            </div>
        </div>
    )
}

export default TimerComponent;