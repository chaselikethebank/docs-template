import { defineConfig } from "vitepress";

export default defineConfig({
    title: "Docs Template",
    description: "Documentation for the development lifecycle",
    themeConfig: {
        search: { provider: "local" },
        logo: "/amore-fati.svg",
        sidebar: [{
                text: "I",
                collapsible: true,
                items: [
                    { text: "Value +", link: "/value" },
                    { text: "Who", link: "/who" }
                ],
            },
            {
                text: "II",
                collapsible: true,
                items: [
                    { text: "Why Docs?", link: "/why" },
                ],
            },
            {
                text: "III",
                collapsible: true,
                items: [
                    { text: "Systems Thinking", link: "/systems" },
                ],
            },
            {
                text: "IV",
                collapsible: true,
                items: [
                    { text: "Structure", link: "/structure" },
                ],
            },
            {
                text: "VI (Development Lifecycle)",
                collapsible: true,
                items: [
                    { text: "Vision Board / Intake", link: "/cycle/vision.md" },
                    { text: "User Stories", link: "/cycle/user-stories" },
                    { text: "Definition of Requirements", link: "/cycle/requirements" },
                    { text: "Build Phase", link: "/cycle/build" },
                    { text: "Testing", link: "/cycle/testing" },
                    { text: "Definition of Done (DoD)", link: "/cycle/dod" },
                    { text: "Docs at Every Stage", link: "/cycle/stage" },
                ],
            },

            {
                text: "VI",
                collapsible: true,
                items: [{ text: "ROI", link: "/roi" }],
            },
            {
                text: "VII",
                collapsible: true,
                items: [{ text: "Tech Stack", link: "/stack" }],
            },
            {
                text: "VIII",
                collapsible: true,
                items: [{ text: "Template", link: "/template" }],
            },
            {
                text: "IX",
                collapsible: true,
                items: [{ text: "Close", link: "/take" }],
            },
        ],
        footer: {
            message: "If code is written but never documented, did it even run?",
            copyright: "Released under the MIT License. Copyright © 2025-present cd.t",
        },
        returnToTopLabel: "Go to Top",
        sidebarMenuLabel: "Menu",
    },
});