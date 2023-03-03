import "./style.css";
import router, { navigateTo } from "./router";

window.addEventListener("DOMContentLoaded", () => {
    router();

    // event
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
            router();
        }
    });

    window.addEventListener("popstate", router);
});
