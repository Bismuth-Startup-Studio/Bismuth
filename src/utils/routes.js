import Home from "../pages/Home/Home"
import Team from "../pages/Team/Team"
import Company from "../pages/Company/Company"

export const routes = new Map([
    [
        "Home", 
        {
            path: '/',
            component: <Home/>
        }
    ],
    [
        "Companies", 
        {
            path:"/companies",
            component: <Company/>
        }
    ],
    [
        "Team", 
        {
            path: "/team",
            component: <Team/>
        }
    ],
    [
        "Contact", 
        {
            path: "#footer",
            component: <Home/>
        }
    ],
])

export const routeNames = []

for(let route of routes.keys()){
    routeNames.push(route)
}