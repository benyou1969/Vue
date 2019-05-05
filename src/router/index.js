import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Profile from '@/components/Profile'


Vue.use(Router)

// Why the symbol # is there between the '/#/' 
// if we go to a website and type '/home' what's happening? we making a request to the serve and the server looked the request and said okay i'll need to send a home page to the browser...
// but when we using vuejs in the front-end we don't want to be sending these requests to the serve all the time we need vuejs to take ccare all the work and when it sees the '/#/home' it prevents that request because this does not send request to the serve then vue js looked this url and says  i'll handle this route and i'll send you to home or about component,and that's why the hash symbol is there

//  but it still not awesome to publish that in production mode  so how we remove it

export default new Router({
      mode : 'history',
      routes: [
            {
                  path: '/',
                  name: 'Home',
                  component: Home
            },
            {
                  path: '/about',
                  name: 'About',
                  component: About
            },
            {
                  path: '/contact',
                  name: 'Contact',
                  component: Contact
            },
            {
                  path: '/users/:user_id',
                  name: 'Profile',
                  component: Profile
            }
      ]
})