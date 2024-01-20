import Home from "../pages/Home/Home"

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
            component: <Home/>
        }
    ],
    [
        "Team", 
        {
            path: "/team",
            component: <Home/>
        }
    ],
    [
        "Contact", 
        {
            path: "/contanct",
            component: <Home/>
        }
    ],
])

export const routeNames = []

for(let route of routes.keys()){
    routeNames.push(route)
}