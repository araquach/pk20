import Vue from 'vue'
import Router from 'vue-router'
import Home from "./views/Home"
import Blog from "./views/Blog"
import BlogPost from "./views/BlogPost"
import Men from "./views/Men"
import Offers from "./views/offers/Offers"
import Refer from "./views/Refer"
import GraduateOffer from "./views/offers/categories/Graduate.vue"
import StylistOffer from "./views/offers/categories/Stylist.vue"
import GeneralOffer from "./views/offers/November"
import BradOffer from "./views/offers/Brad"
import EveOffer from "./views/offers/Eve"
import DavidOffer from "./views/offers/David"
import JoOffer from "./views/offers/Jo"
import DavidLaurenOffer from "./views/offers/DavidLauren"
import JoBradAbiOffer from "./views/offers/JoBradAbi"
import LaurenOffer from "./views/offers/Lauren"
import AutumnOffer from "./views/offers/Autumn"
import Feb25 from "./views/offers/feb25/Feb25.vue";
import Recruitment from "./views/recruitment/Recruitment"
import RecruitmentStylist from "./views/recruitment/Stylist"
import RecruitmentApprentice from "./views/recruitment/Apprentice"
import RecruitmentSaturday from "./views/recruitment/Saturday"
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
import TopSpender from "./views/TopSpender"
import Leaver from "./views/Leaver"
import OnlineStore from "./views/OnlineStore.vue";
import NewYear from "./views/offers/NewYear.vue";
import NewYearSMS from "./views/offers/sms/NewYear.vue"
import Spring from "./views/offers/Spring.vue";
import SpringSMS from "./views/offers/sms/Spring.vue"
import Extensions from "./views/offers/Extensions.vue";
import AutumnWinter from "./views/offers/winter24/AutumnWinter.vue";
import PriceIncrease from "./views/PriceIncrease.vue";
import Policies from "./views/Policies.vue";
import Oct25 from "./views/offers/Oct25.vue";
import Refurb from "./views/Refurb.vue";

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
            path: "/refer-a-friend",
            component: Refer,
            name: "refer"
        },
        {
            path: "/offers",
            component: Offers,
            name: "offers"
        },
        {
            path: "/offers/graduatestylist",
            component: GraduateOffer,
            name: "graduate-offer"
        },
        {
            path: "/offers/stylist",
            component: StylistOffer,
            name: "stylist-offer"
        },
        {
            path: "/offers/general",
            component: GeneralOffer,
            name: "general-offer"
        },
        {
            path: "/offers/david",
            component: DavidOffer,
            name: "david-offer"
        },
        {
            path: "/offers/eve",
            component: EveOffer,
            name: "eve-offer"
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
            path: "/offers/jo-brad-abi",
            component: JoBradAbiOffer,
            name: "jo-brad-abi-offer"
        },
        {
            path: "/offers/david-lauren",
            component: DavidLaurenOffer,
            name: "david-lauren-offer"
        },
        {
            path: "/offers/autumn",
            component: AutumnOffer,
            name: "autumn-offer"
        },
        {
            path: "/offers/extensions",
            component: Extensions,
            name: "extensions-offer"
        },
        {
            path: "/offers/newyear",
            component: NewYear,
            name: "new-year-offer"
        },
        {
            path: "/sms/newyear",
            component: NewYearSMS,
            name: "new-year-sms-offer"
        },
        {
            path: "/offers/spring",
            component: Spring,
            name: "spring-offer"
        },
        {
            path: "/offers/pk25",
            component: AutumnWinter,
            name: "autumn-winter-offer"
        },
        {
            path: "/sms/spring",
            component: SpringSMS,
            name: "spring-sms-offer"
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
            path: "/recruitment/saturday",
            component: RecruitmentSaturday,
            name: "recruitment-saturday"
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
            path: '/bookings',
            name: 'bookings',
            component: Bookings
        },
        // {
        //     path: "/bookings",
        //     // component: Bookings,
        //     name: "bookings",
        //     beforeEnter() {location.href = 'https://phorest.com/book/salons/paulkemp'}
        // },
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
        {
            path: "/brad-leaving"  ,
            component: Leaver,
            name: "leaver"
        },
        {
            path: "/gift-voucher",
            name: "gift-voucher",
            beforeEnter() {location.href = 'https://gift-cards.phorest.com/salons/paulkemp'}
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
            path: '/links',
            name: 'links',
            component: LinkTree
        },
        {
            path: '/your-gift',
            name: 'top-spender',
            component: TopSpender
        },
        {
            path: '/online-shop',
            name: 'online-shop',
            component: OnlineStore
        },
        {
            path: '/policies',
            name: 'policies',
            component: Policies
        },
        {
            path: '/new-prices',
            name: 'price-increase',
            component: PriceIncrease
        },
        {
            path: '/refurb',
            name: 'refurb',
            component: Refurb
        },
        {
            path: '/:notFound(.*)', redirect: '/'
        }
    ]
})

export default router



