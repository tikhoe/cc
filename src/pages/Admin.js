import React from 'react';


import Users from '../components/apps/admin/Users';

class Admin extends React.Component {
    components = {
        'users': () => <Users />
    }

    render(){
        const { params } = this.props.match;
        const { page } = params;

        console.log(page);

        return this.components[page] ? this.components[page]() : <p>Admin</p>
    }
}

export default Admin

