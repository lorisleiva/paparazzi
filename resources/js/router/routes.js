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
]