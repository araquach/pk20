import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/Home"
import Blog from "./views/Blog"
import BlogPost from "./views/BlogPost"
import Men from "./views/Men"
import Offers from "./views/offers/Offers"
import BradOffer from "./views/offers/Brad"
import AbiOffer from "./views/offers/Abi"
import DavidOffer from "./views/offers/David"
import JoOffer from "./views/offers/Jo"
import LaurenOffer from "./views/offers/Lauren"
import Recruitment from "./views/recruitment/Recruitment"
import RecruitmentStylist from "./views/recruitment/Stylist"
import RecruitmentApprentice from "./views/recruitment/Apprentice"
import Reviews from "./views/Reviews"
import Salon from "./views/Salon"
import Team from "./views/Team"
import TeamDetail from "./views/TeamDetail"
import Contact from "./views/Contact"
import Bookings from "./views/Bookings"
import Corona from "./views/Corona"
import Reopening from "./views/Reopening"
import calcRoutes from "araquach-price-calc/router/calcRoutes"
import Quote from "./views/quote/Quote"
import LinkTree from "./views/LinkTree"

Vue.use(Router)

const router = new Router({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({ selector: to.hash, offset: { x: 0, y: 0 }})
                }, 500)
            })
        }
        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: "",
            component: Home,
            name: "home"
        },
        {
            path: "/blog",
            component: Blog,
            name: "blog"
        },
        {
            path: '/blog/:slug',
            name: 'blog-post',
            component: BlogPost,
            props: true
        },
        {
            path: "/men",
            component: Men,
            name: "men"
        },
        {
            path: "/offers",
            component: Offers,
            name: "offers"
        },
        {
            path: "/offers/david",
            component: DavidOffer,
            name: "david-offer"
        },
        {
            path: "/offers/abi",
            component: AbiOffer,
            name: "abi-offer"
        },
        {
            path: "/offers/brad",
            component: BradOffer,
            name: "brad-offer"
        },
        {
            path: "/offers/jo",
            component: JoOffer,
            name: "jo-offer"
        },
        {
            path: "/offers/lauren",
            component: LaurenOffer,
            name: "lauren-offer"
        },
        {
            path: "/recruitment",
            component: Recruitment,
            name: "recruitment"
        },
        {
            path: "/recruitment/stylist",
            component: RecruitmentStylist,
            name: "recruitment-stylist"
        },
        {
            path: "/recruitment/apprentice",
            component: RecruitmentApprentice,
            name: "recruitment-apprentice"
        },
        {
            path: "/reviews/:slug",
            component: Reviews,
            name: "reviews",
            props: true
        },
        {
            path: "/salon",
            component: Salon,
            name: "salon"
        },
        {
            path: "/team",
            component: Team,
            name: "team"
        },
        {
            path: '/team/:slug',
            name: 'team-detail',
            component: TeamDetail,
            props: true
        },
        {
            path: "/contact",
            component: Contact,
            name: "contact"
        },
        {
            path: "/bookings",
            // component: Bookings,
            name: "bookings",
            beforeEnter() {location.href = 'https://phorest.com/book/salons/paulkemp'}
        },
        {
            path: "/corona",
            component: Corona,
            name: "corona"
        },
        {
            path: "/reopening",
            component: Reopening,
            name: "reopening"
        },

        ...calcRoutes,

        {
            path: '/quote/:link',
            name: 'quote',
            component: Quote,
            props: true
        },
        {
            path: '/link-tree',
            name: 'link-tree',
            component: LinkTree
        },

        {
            path: '/:notFound(.*)', redirect: '/'
        }
    ]
})

export default router



