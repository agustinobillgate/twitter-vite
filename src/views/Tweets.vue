<template>
  <Tweet v-for="tweet in tweets" v-bind="tweet"></Tweet>
</template>

<script>
import Tweet from "../components/Tweet.vue";

export default {
  data() {
    return {
      tweets: [{
        tprofile: "/src/assets/profile2.jpg",
        tname: "Habis Nonton Film",
        tusername: "HabisNontonFilm",
        tcreated: "May 13",
        tdesc: "Acha Septriasa sebagai Mumun dan Mimin dalam film MUMUN Segera di bioskop.",
        timage: "/src/assets/media3.jpg",
        tcomment: "43",
        tretweet: "98",
        tlike: "254"
      },
      {
        tprofile: "/src/assets/profile.jpg",
        tname: "Ary Setiyawan",
        tusername: "parys410",
        tcreated: "Nov 18, 2021",
        tdesc: "XL ada apa kah? sinyal 4g hanya 1 bar di daerah Abianbase",
        timage: "/src/assets/none.jpeg",
        tcomment: "1",
        tretweet: "",
        tlike: ""
      },
      {
        tprofile: "/src/assets/profile.jpg",
        tname: "Ary Setiyawan",
        tusername: "parys410",
        tcreated: "Oct 12, 2021",
        tdesc: "Yang trouble CBN dari semalem @di_cbn setelah ganti ke dns google di admin panel (192.168.1.1), lgsg mau.. Harusnya sih ada info lebih lanjut kenapa bisa sampai selama ini down nya",
        timage: "/src/assets/media2.png",
        tcomment: "4",
        tretweet: "5",
        tlike: "2"
      }, {
        tprofile: "/src/assets/profile.jpg",
        tname: "Ary Setiyawan",
        tusername: "parys410",
        tcreated: "Sep 5, 2020",
        tdesc: "@BPJSTKinfo Min, sms begini itu bener nda sih?",
        timage: "/src/assets/media4.jpg",
        tcomment: "1",
        tretweet: "",
        tlike: ""
      }]
    }
  },
  components: { Tweet }
}
</script>