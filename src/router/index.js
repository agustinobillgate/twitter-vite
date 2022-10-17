import { createRouter, createWebHistory, useRoute } from "vue-router";
import Tweets from "../views/Tweets.vue";
import Replies from "../views/Replies.vue";
import Media from "../views/Media.vue";
import Likes from "../views/Likes.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/tweets",
      name: "tweets",
      component: Tweets,
    },
    {
      path: "/replies",
      name: "replies",
      component: Replies,
    },
    {
      path: "/media",
      name: "media",
      component: Media,
    },
    {
      path: "/likes",
      name: "likes",
      component: Likes,
    },
  ],
});

export default router;