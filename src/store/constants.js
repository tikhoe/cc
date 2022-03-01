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
                icon: 'home-outline',
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
                icon: 'home-outline',
                status: 1
            },
            {
                name: 'Analytics',
                path: '/analytics',
                icon: 'bar-chart-outline',
                status: 1
            },
            {
                name: 'Agents',
                path: '/agents',
                icon: 'people-outline',
                status: 1
            },
            {
                name: 'Services',
                path: '/services',
                icon: 'grid-outline',
                status: 1
            },
        ]

    }
]

export const apps = [
    {
        name:"Digital Signage",
        slug:"/ds/",
        icon:"",
        settings:{}
    },
    {
        name:"Queue Management",
        slug:"/qm/",
        icon:"",
        settings:{}
    },
    {
        name:"Customer Feedback",
        slug:"/cf/",
        icon:"",
        settings:{}
    },
    {
        name:"Admin",
        slug:"/admin/",
        icon:"",
        settings:{}
    }
]