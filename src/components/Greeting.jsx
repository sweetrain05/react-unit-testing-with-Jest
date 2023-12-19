import { useState } from 'react';
import Wrapper from './Wrapper';

const Greeting = () => {
    const [changedText, setChangedTest] = useState(false);

    const handleClick = () => {
        setChangedTest(true);
    };

    return (
        <div>
            <h1>Hello World!</h1>
            {!changedText && <Wrapper>It's good to see you!</Wrapper>}
            {changedText && <Wrapper>Changed!</Wrapper>}
            <button onClick={handleClick}>Change Text!</button>
        </div>
    );
};

export default Greeting;
