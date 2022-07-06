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
        path: '/ds/',
        menuItems: [
            {
                name: 'Dashboard',
                path: 'dashboard/',
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

    },
    {
        app: 'admin',
        path: '/admin',
        menuItems: [
            {
                name: 'Organizations',
                path: '/organizations',
                icon: 'bar-chart-outline',
                status: 1
            },
            {
                name: 'Endpoints',
                path: '/endpoints',
                icon: 'play-outline',
                status: 1
            },
            {
                name: 'Branches',
                path: '/branches',
                icon: 'business-outline',
                status: 1
            },
            {
                name: 'Audiences',
                path: '/towns',
                icon: 'earth-outline',
                status: 1
            }, {
                name: 'Towns',
                path: '/towns',
                icon: 'paper-plane-outline',
                status: 1
            }
            ,
            {
                name: 'Regions',
                path: '/regions',
                icon: 'paper-plane-outline',
                status: 1
            },
            {
                name: 'Countries',
                path: '/countries',
                icon: 'paper-plane-outline',
                status: 1
            },
            {
                name: 'Users',
                path: '/users',
                icon: 'people-outline',
                status: 1
            },
            {
                name: 'Settings',
                path: '/settings',
                icon: 'settings-outline',
                status: 1
            }
        ]

    }
]

export const FoodCategories = [
    {
        name: "Pizza",
        count: 167
    },
    {
        name: "Pizza",
        count: 167
    },
    {
        name: "Pizza",
        count: 167
    },
    {
        name: "Pizza",
        count: 167
    },
    {
        name: "Pizza",
        count: 167
    },
    {
        name: "Pizza",
        count: 167
    }
    ,
    {
        name: "Pizza",
        count: 167
    }
    ,
    {
        name: "Pizza",
        count: 167
    }
    ,
    {
        name: "Pizza",
        count: 167
    }
]

export const RestaurantsList = [
    {
        name:"Furstenhof Restaurant & Bar",
        image:"1.png",
        icon:"",
        shortName:'ds'
    },
    {
        name:"Neptunes Coffee Shop",
        image:"2.png",
        icon:"",
        shortName:'qm'
    },
    {
        name:"Customer Feedback",
        image:"3.png",
        icon:"",
        shortName:'cf'
    },
    {
        name:"Admin",
        image:"4.png",
        icon:"",
        shortName:'admin'
    },
    {
        name:"Digital Signage",
        image:"1.png",
        icon:"",
        shortName:'ds'
    },
    {
        name:"Queue Management",
        image:"2.png",
        icon:"",
        shortName:'qm'
    },
    {
        name:"Customer Feedback",
        image:"3.png",
        icon:"",
        shortName:'cf'
    },
    {
        name:"Admin",
        image:"4.png",
        icon:"",
        shortName:'admin'
    },
    {
        name:"Digital Signage",
        image:"1.png",
        icon:"",
        shortName:'ds'
    },
    {
        name:"Queue Management",
        image:"2.png",
        icon:"",
        shortName:'qm'
    },
    {
        name:"Customer Feedback",
        image:"3.png",
        icon:"",
        shortName:'cf'
    },
    {
        name:"Admin",
        image:"4.png",
        icon:"",
        shortName:'admin'
    }
]

