import React, {useEffect} from 'react';

function App(props) {

    useEffect(() => {
        console.log('test');
    }, []);
    // console.log('Test')
    return (
        <div className={'text-5xl'}>React Component</div>
    );
}

export default App;

