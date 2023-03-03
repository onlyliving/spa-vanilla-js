import HomePage from "./src/pages/HomePage";
import ListPage from "./src/pages/ListPage";

export const navigateTo = (url) => {
    // update url

    history.pushState(null, null, url);

    // update page
    // const navEvent = new PopStateEvent("popstate");
    // window.dispatchEvent(navEvent);
};

export default () => {
    const root = document.querySelector("#app");

    const { pathname } = location;
    root.innerHTML = "";

    const routes = [
        { path: "/", view: HomePage },
        { path: "/list", view: ListPage },
    ];

    // 활성화된 routes
    const currentRoute = routes.filter((route) => route.path === pathname);
    const currentView = currentRoute[0].view();
    document.querySelector("#app").innerHTML = currentView;
};
