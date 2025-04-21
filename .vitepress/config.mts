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
        text: "API Documentation",
        items: [
          { text: "Base", link: "index.md#base" },
          {
            text: "Authentication setup",
            link: "index.md#authentication-setup",
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
                link: "users/users-me.md#get-current-user-data",
              },
              {
                text: "Update current user data",
                link: "users/users-me.md#update-current-user-data",
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
