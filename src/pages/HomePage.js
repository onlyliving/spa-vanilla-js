import { pageLayout } from "../util.js";

export default () => {
    /*
        templage: () => {
            return ``
        },
        script: () => {
            console.log("home")
        }

    */
    const title = "home";
    const main = `
        <div class="homepage">
            <h1>home page</h1>
        </div>
    `;

    console.log("home");

    return pageLayout({ title, main });
};
