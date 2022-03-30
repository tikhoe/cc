import React from 'react';


import Users from '../components/apps/admin/Users';
import Organizations from '../components/apps/admin/Organizations';
import Branches from '../components/apps/admin/Branches';

class Admin extends React.Component {
    components = {
        'users': () => <Users />,
        'organizations': () => <Organizations />,
        'branches': () => <Branches />,
    }

    render(){
        const { params } = this.props.match;
        const { page } = params;

        return this.components[page] ? this.components[page]() : <p>Admin</p>
    }
}

export default Admin
