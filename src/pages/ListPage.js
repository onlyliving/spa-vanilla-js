import { pageLayout } from "../util.js";

export default () => {
    const title = "list";
    const main = `
        <div class="homepage">
            <h1>list page</h1>
        </div>
    `;

    return pageLayout({ title, main });
};
