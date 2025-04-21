import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/tabbik-docs/",
  title: "Tabbik Docs",
  description: "Learn how to use Tabbik API",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [],

    sidebar: [
      {
        text: "Common",
        items: [
          { text: "Base", link: "index.md#base" },
          {
            text: "Authentication setup",
            link: "index.md#authentication-setup",
          },
          {
            text: "Pagination",
            link: "pagination.md",
          },
        ],
      },
      {
        text: "Authorization",
        items: [{ text: "Signup with Google", link: "auth/google.md" }],
      },
      {
        text: "API",
        items: [
          {
            text: "Users",
            link: "users/users-me.md",
            items: [
              {
                text: "Get current user data",
                link: "users.md#get-current-user-data",
              },
              {
                text: "Update current user data",
                link: "users.md#update-current-user-data",
              },
              {
                text: "Get all users list",
                link: "users.md#get-all-users-list",
              },
            ],
          },
          {
            text: "Tournaments",
            link: "tournaments.md",
            items: [
              {
                text: "Get tournaments list",
                link: "tournaments.md#get-tournaments-list",
              },
              {
                text: "Create a new tournament",
                link: "tournaments.md#create-a-new-tournament",
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/boorsoft/tabbik-backend" },
    ],
  },
});
