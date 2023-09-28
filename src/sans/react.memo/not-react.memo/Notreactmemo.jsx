import { useState } from 'react';
import Profile from './profile';

const Notreactmemo = () => {
    console.log('App rendered');
    const [text, setText] = useState('');

    let user = { name: 'John Doe', age: 23, userName: 'Jonny' };

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Profile userDetails={user} />
        </div>
    );
};

export default Notreactmemo;