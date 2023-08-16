import './App.css'
import {useState} from 'react'
function App() {
    const [state, setState] = useState({
        red: 'red',
        blue: 'blue'
    });
    const switchColor = ()=>{
        setState(color=>({
            red: color.blue,
            blue: color.red
        }))
    }


    return (
        <div className='wrapper'>
            <div className="square"
                 onClick={switchColor}
                 style={{backgroundColor: state.red}}
            ></div>
            <div className="square"
                 onClick={switchColor}
                 style={{backgroundColor: state.blue}}
            ></div>
        </div>
    )
}

export default App
