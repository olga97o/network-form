import './App.css';

import Buttons from "./components/Buttons/Buttons";
import EthernetSettings from "./components/NetworkSettings/EthernetSettings";
import WirelessSettings from "./components/NetworkSettings/WirelessSettings";

function App() {

    const submit = (e) => {
        e.preventDefault();
        const obj = {};
        const target = e.target;
        Object.values(target).forEach(input => {
            if (input.value && input.value.length) {
                obj[input.id] = input.value;
                input.value = '';
            }
        })
        console.log('obj', obj)
    }

    const reset = (e) => {
        e.preventDefault();
        const target = e.target;
        Object.values(target).forEach(input => {
            if (input.type === 'text' ) {
                input.value = '';
            }
        })
    }

    return (
        <form onSubmit={submit} onReset={reset}>
            <EthernetSettings/>
            <WirelessSettings/>
            <Buttons/>
        </form>

    );
}

export default App;
