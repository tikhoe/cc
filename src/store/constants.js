import { useLocation } from 'react-router-dom';

export const PubSubKeys = {
    createTicket: {
        exchange: "tickets",
        routingKey: "create"
    },
    callTicket: {
        exchange: "tickets",
        routingKey: "nextTicket"
    },
    completeTicket: {
        exchange: "tickets",
        routingKey: "complete"
    },
    noShowTicket: {
        exchange: "tickets",
        routingKey: "noShow"
    },
    transferTicket: {
        exchange: "tickets",
        routingKey: "transfer"
    },
};

export const TicketStatuses = {
    createTicket: 0,
    callTicket: 1,
    completeTicket: 3,
    noShowTicket: 2,
    transferTicket: 0
};

export const URLs = {
    pubsub: 'http://192.168.8.158:4000/localrmq/',
    api: 'http://192.168.8.158:4000'
}

export const navigation = [
    {
        app: 'ds',
        path: '/ds',
        menuItems: [
            {
                name: 'Dashboard',
                path: '/dashboard',
                icon: 'bar-chart-outline',
                status: 1
            },
            {
                name: 'Media Storage',
                path: '/dashboard',
                icon: 'cloud-upload-outline',
                status: 1
            },
            {
                name: 'Scheduled content',
                path: '/dashboard',
                icon: 'videocam-outline',
                status: 1
            },
            {
                name: 'Widgets',
                path: '/dashboard',
                icon: 'apps-outline',
                status: 1
            },
            {
                name: 'Settings',
                path: '/dashboard',
                icon: 'settings-outline',
                status: 1
            }
        ]

    },
    {
        app: 'qm',
        path: '/qm',
        menuItems: [
            {
                name: 'Dashboard',
                path: '/dashboard',
                icon: 'bar-chart-outline',
                status: 1
            },
            {
                name: 'Services',
                path: '/services',
                icon: 'apps-outline',
                status: 1
            },
            {
                name: 'Settings',
                path: '/dashboard',
                icon: 'settings-outline',
                status: 1
            }
        ]

    }
]

export const Apps = [
    {
        name:"Digital Signage",
        slug:"/ds/",
        icon:"",
    },
    {
        name:"Queue Management",
        slug:"/qm/",
        icon:"",
    },
    {
        name:"Customer Feedback",
        slug:"/cf/",
        icon:"",
    },
    {
        name:"Admin",
        slug:"/admin/",
        icon:"",
    }
]