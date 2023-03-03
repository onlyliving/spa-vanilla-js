import Header from "../components/Header";

export const pageLayout = ({ title, main }) => {
    document.title = title;
    return Header() + main;
};
