import Home from "./components/home"
import Blog from "./components/Blog"
import Men from "./components/Men"
import Offers from "./components/Offers"
import Recruitment from "./components/Recruitment"
import Reviews from "./components/Reviews"
import Salon from "./components/Salon"
import Team from "./components/Team"
import Contact from "./components/Contact"

export const routes = [
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
        path: "/recruitment",
        component: Recruitment,
        name: "recruitment"
    },
    {
        path: "/reviews",
        component: Reviews,
        name: "reviews"
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
        path: "/contact",
        component: Contact,
        name: "contact"
    }
]

