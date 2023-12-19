import { useState } from 'react';

const Greeting = () => {
    const [changedText, setChangedTest] = useState(false);

    const handleClick = () => {
        setChangedTest(true);
    };

    return (
        <div>
            <h1>Hello World!</h1>
            {!changedText && <p>It's good to see you!</p>}
            {changedText && <p>Changed!</p>}
            <button onClick={handleClick}>Change Text!</button>
        </div>
    );
};

export default Greeting;
