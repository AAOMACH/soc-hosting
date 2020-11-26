/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
import store from '../store'
export default [
  {
    path: '*',
    meta: {
      name: '',
      requiresAuth: false
    },
    redirect: {
      path: '/dashboard'
    }
  },
  // This  allows you to have pages apart of the app but no rendered inside the dash
   {
     path: '/',
     meta: {
       name: '',
       requiresAuth: false
     },
  
    
     component: () =>
       import(/* webpackChunkName: "routes" */ `@/views/Login.vue`),
    // redirect if already signed in
     beforeEnter: (to, from, next) => {
       if (store.getters.authorized) {
         next('/dashboard')
        
       }
     
      
       else {
           next('/dashboard')
       }
     },
     children: [
       {
         path: '/',
         component: () => import(`@/views/Login.vue`)
       }
     ]
   },
  // add any extra routes that you want rendered in the dashboard as a child below. Change toolbar names here
  {
    path: '/dashboard',
    meta: {
      name: 'Dashboard',
      requiresAuth: true
    },
    component: () => import(`@/views/DashboardView.vue`),
    
  },
  {
    path: '/inventorycontrol',
    meta: {
      name: 'InventoryControl',
      requiresAuth: true
    },
    component: () => import(`@/views/InventoryView.vue`),
    
  },
  {
    path: '/stocktracking',
    meta: {
      name: 'stocktracking',
      requiresAuth: true
    },
    component: () => import(`@/views/TrackingView.vue`),
    
  },
  {
    path: '/ordered',
    meta: {
      name: 'ordered',
      requiresAuth: true
    },
    component: () => import(`@/views/OrderedView.vue`),
    
  },

  {
    path: '/cost',
    meta: {
      name: 'cost',
      requiresAuth: true
    },
    component: () => import(`@/views/CostView.vue`),
    
  },
  {
    path: '/warehousing',
    meta: {
      name: 'warehousing',
      requiresAuth: true
    },
    component: () => import(`@/views/Warehousing.vue`),
    
  },





  
]
