import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import store from './models/user-store'

ReactDOM.render(<App store={store}/>, document.querySelector('.container'));

/*
The store will get the data it needs when the componentWillMount life-cycle method is triggered.

It will then use this data to render each one of our Profiles by mapping over it’s users array.

Clicking any of the profiles will cause us to populate the selectedUser state.
    The Selection component will render with its data as a direct reaction to that.

Additionally, having a selectedUser will cause selectedId to compute as a reaction.
    This will in turn highlight one of our Profiles.

Finally, we can click the ‘Close Profile’ button to reset our selectedUser,
    and bring everything back to the start.
*/
