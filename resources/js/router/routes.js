export default [
    {
        path: '/',
        component: require('@components/HomePage').default,
        name: 'HomePage',
    },
    {
        path: '/login',
        component: require('@components/AuthLogin').default,
        name: 'AuthLogin',
    },
    {
        path: '/register',
        component: require('@components/AuthRegister').default,
        name: 'AuthRegister',
    },
    {
        path: '/password/reset',
        component: require('@components/AuthPasswordEmail').default,
        name: 'AuthPasswordEmail',
    },
    {
        path: '/password/reset/:token',
        component: require('@components/AuthPasswordReset').default,
        name: 'AuthPasswordReset',
    },
    {
        path: '/paparazzi',
        component: require('@components/PaparazziIndex').default,
        name: 'PaparazziIndex',
    },
    {
        path: '/paparazzi/:id',
        component: require('@components/PaparazziShow').default,
        children: [
            {
                path: '',
                component: require('@components/PaparazziShowOverview').default,
                name: 'PaparazziShowOverview',
            },
            {
                path: 'shots',
                component: require('@components/PaparazziShowShots').default,
                name: 'PaparazziShowShots',
            },
            {
                path: 'settings',
                component: require('@components/PaparazziShowSettings').default,
                name: 'PaparazziShowSettings',
            },
        ],
    },
]