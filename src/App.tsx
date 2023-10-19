import React, {useState} from 'react';
import Button from './components/Buttons/Button';
import Circle from './components/Circle/Circle';

const App = () => {
    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

    const newNumbers = (): void => {
        const newNumbers: number[] = [];

        while (newNumbers.length < 5) {
            const newNumber = Math.ceil(Math.random() * (36 - 5 + 1)) + 5;
            if (!newNumbers.includes(newNumber)) {
                newNumbers.push(newNumber);
            }
        }

        for (let i = 0; i < newNumbers.length - 1; i++) {
            for (let j = i + 1; j < newNumbers.length; j++) {
                if (newNumbers[i] > newNumbers[j]){
                    const oldNumber = newNumbers[i];
                    newNumbers[i] = newNumbers[j];
                    newNumbers[j] = oldNumber;
                }
            }
        }

        setNumbers(newNumbers);
    };



    return (
        <div className='text-center mt-[30px]'>
            <Button onclick={newNumbers}>New numbers</Button>
            <div className='flex justify-center'>
                {
                    numbers.map((number: number, index: number) => {
                        return (
                            <Circle key={index} number={number}/>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default App;