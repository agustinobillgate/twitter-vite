<template>
  <Tweet v-for="tweet in tweets" v-bind="tweet"></Tweet>
</template>

<script>
import Tweet from "../components/Tweet.vue";

export default {
  data() {
    return {
      tweets: [{
        tprofile: "/src/assets/profile3.jpg",
        tname: "dede juliartha",
        tusername: "dedejuliartha",
        tcreated: "Oct 8",
        tdesc: "rata rata bule kayak gitu gak ya? Cng ngelah timpal bule uli abianbase kok. Polos nak ne kok.",
        timage: "/src/assets/none.jpeg",
        tcomment: "2",
        tretweet: "",
        tlike: ""
      },
      {
        tprofile: "/src/assets/profile4.jpg",
        tname: "Putu Edy Diantara",
        tusername: "EdieDiant",
        tcreated: "Oct 9",
        tdesc: "@parys410 rik, qe dikatain bule, ada masalah apa qe sama dede?",
        timage: "/src/assets/none.jpeg",
        tcomment: "1",
        tretweet: "",
        tlike: ""
      },
      {
        tprofile: "/src/assets/profile.jpg",
        tname: "Ary Setiyawan",
        tusername: "parys410",
        tcreated: "Oct 9",
        tdesc: "Tidur tidur udah pagi",
        timage: "/src/assets/none.jpeg",
        tcomment: "",
        tretweet: "",
        tlike: ""
      }]
    }
  },
  components: { Tweet }
}
</script>