import React from 'react';
import Name from './subcomponents/Name';

class PersonalInfo extends React.Component {
    render() {
        return (
            <fieldset>
                Personal Info
                <Name />
            </fieldset>
        )
    }
}

export default PersonalInfo;