<template>
    <Tweet v-for="tweet in tweets" v-bind="tweet"></Tweet>
</template>
  
<script>
import Tweet from "../components/Tweet.vue";

export default {
    data() {
        return {
            tweets: [{
                tprofile: "/src/assets/profile6.jpg",
                tname: "Chelsea FC",
                tusername: "Chelsea FC",
                tcreated: "Oct 17",
                tdesc: "Mason Mount, Mount, Mount",
                timage: "/src/assets/none.jpeg",
                tcomment: "408",
                tretweet: "5,502",
                tlike: "44,8K"
            }, {
                tprofile: "/src/assets/profile5.jpg",
                tname: "Mas2 HRD yang demen Muse",
                tusername: "ezash",
                tcreated: "Oct 14",
                tdesc: "Tips buat Fresh Graduate Gue mau share persiapan yg perlu kalian siapin sebagai orang yg baru banget mau interview Tips ini berdasarkan pengalaman saya yg udah sering interview dari 2015, semoga membantu teman2 ya RT & saved sob biar ga lupa, sebarin juga ke temennya~",
                timage: "/src/assets/none.jpeg",
                tcomment: "71",
                tretweet: "7,087",
                tlike: "26K"
            }, {
                tprofile: "/src/assets/profile7.jpg",
                tname: "Frank Khalid",
                tusername: "FrankKhalidUK",
                tcreated: "Oct 14",
                tdesc: "✅◾️ Built a school worth €270,000. ✅◾️ Built a hospital worth €530,000. ✅◾️ Gives each family €70 monthly. ✅◾️ Provides free clothes to kids. ✅◾️ Access to the 4G network thanks to his partnership with Orange. ✅A man with a golden heart, Sadio Mane. 🇸🇳❤️",
                timage: "/src/assets/media5.jpg",
                tcomment: "425",
                tretweet: "9,746",
                tlike: "64,4K"
            },
            ]
        }
    },
    components: { Tweet }
}
</script>