import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today at 4:40PM" commentText="Hello man" profileImage={faker.image.image()}/>
            <CommentDetail author="Jane" timeAgo="Today at 4:50PM" commentText="Nice blog post" profileImage={faker.image.image()} />
            <CommentDetail author="Alex" timeAgo="Today at 5:40PM" commentText="What is all about?" profileImage={faker.image.image()} />
            <CommentDetail author="Mary" timeAgo="Today at 5:50PM" commentText="Test that one" profileImage={faker.image.image()} />
        </div>

    );
};

ReactDOM.render(<App />,document.querySelector('#root'));