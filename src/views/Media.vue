<template>
    <Tweet v-for="tweet in tweets" v-bind="tweet"></Tweet>
</template>
  
<script>
import Tweet from "../components/Tweet.vue";

export default {
    data() {
        return {
            tweets: [{
                tprofile: "/src/assets/profile.jpg",
                tname: "Ary Setiyawan",
                tusername: "parys410",
                tcreated: "Feb 25",
                tdesc: "@bankmandiri Livin by Mandiri tidak bisa di akses, muter-muter mulu. Ada apa ya?",
                timage: "/src/assets/media.jpg",
                tcomment: "10",
                tretweet: "1",
                tlike: ""
            }, {
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