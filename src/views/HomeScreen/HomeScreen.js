import React from 'react';

import Page from '../Layouts/Page';

import UML from '../Components/UML';


const HomeScreen = React.createClass({
    render() {
        return (
            <Page title="Home">
                <UML />
            </Page>
        );
    }
});

export default HomeScreen;
