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
    pubsub: '/localrmq/',
    api: 'https://tikhoes-macbook-pro.local:4000'
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
                path: 'storage/',
                icon: 'cloud-upload-outline',
                status: 1
            },
            {
                name: 'Scheduled content',
                path: 'scheduled/',
                icon: 'videocam-outline',
                status: 1
            },
            {
                name: 'Widgets',
                path: 'widgets/',
                icon: 'apps-outline',
                status: 1
            },
            {
                name: 'Settings',
                path: 'settings/',
                icon: 'settings-outline',
                status: 1
            }
        ]

    },
    {
        app: 'qm',
        path: '/qm/',
        menuItems: [
            {
                name: 'Dashboard',
                path: 'dashboard/',
                icon: 'bar-chart-outline',
                status: 1
            },
            {
                name: 'Services',
                path: 'services/',
                icon: 'apps-outline',
                status: 1
            },
            {
                name: 'Support Desks',
                path: 'support-desks/',
                icon: 'apps-outline',
                status: 1
            },
            {
                name: 'Settings',
                path: 'settings/',
                icon: 'settings-outline',
                status: 1
            }
        ]

    },
    {
        app: 'admin',
        path: '/admin/',
        menuItems: [
            {
                name: 'Organizations',
                path: 'organizations/',
                icon: 'bar-chart-outline',
                status: 1
            },
            {
                name: 'Endpoints',
                path: 'endpoints/',
                icon: 'play-outline',
                status: 1
            },
            {
                name: 'Branches',
                path: 'branches/',
                icon: 'business-outline',
                status: 1
            },
            {
                name: 'Users',
                path: 'users/',
                icon: 'people-outline',
                status: 1
            },
            {
                name: 'Settings',
                path: 'settings/',
                icon: 'settings-outline',
                status: 1
            }
        ]

    }
]

export const apps = [
    {
        name:"Digital Signage",
        shortName: "ds",
        path:"/ds/",
    },
    {
        name:"Queue Management",
        shortName: "qm",
        path:"/qm/",
    },
    // {
    //     name:"Customer Feedback",
    //     shortName: "cf",
    //     path:"/cf/",
    // },
    {
        name:"Admin",
        shortName: "admin",
        path:"/admin/",
    }
]


// create new user
export const userDefault = {
    organizationId: '',
    branchId: '',
    name: '',
    lastname: '',
    email: '',
    password: '',
    agentStatus: 0,
    services: [],
    created: '',
    updateStatus: 0
}

// create new organization
export const organizationDefault = {
    name: '',
    shortName: '',
    created: '',
    updateStatus: 0
}

// create new branch
export const branchDefault = {
    name: '',
    description: '',
    organizationId: '',
    townId: '',
    regionId: '',
    countryId: '',
    created: '',
    updateStatus: 0
}
