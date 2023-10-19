import React, {useState} from 'react';
import Button from './components/Buttons/Button';

const App = () => {
    const [numbers, setNumbers] = useState([5, 11, 16, 23, 32]);

    const newNumbers = () => {
        setNumbers([4,23,45,67,78]);
    };


    return(
        <div>
            <Button onclick={newNumbers}>New numbers</Button>
        </div>
    )
};

export default App;