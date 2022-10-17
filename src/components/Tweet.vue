<template>
    <div class="container">
        <div class="card tweet">
            <div class="row">
                <div class="col-2 wrap-tweet-profile">
                    <img :src="`${tprofile}`" class="avatar-tweet">
                </div>
                <div class="col-10">
                    <div class="tweet-header">
                        <b>{{tname}}</b>
                        <p class="m-0">@{{tusername}} . {{tcreated}}</p>
                    </div>

                    <div class="tweet-content">
                        <p>{{tdesc}}</p>
                        <img :src="`${timage}`" class="tweet-img">
                    </div>

                    <div class="tweet-info-counts">
                        <div class="comments">
                            <p><i class="fa-regular fa-comment"></i>{{tcomment}}</p>
                        </div>
                        <div class="retweets">
                            <p><i class="fa-regular fa-retweet"></i>{{tretweet}}</p>
                        </div>
                        <div class="likes">
                            <p><i class="fa-regular fa-heart"></i>{{tlike}}</p>
                        </div>
                        <div class="message">
                            <p><i class="fa-regular fa-comment"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tprofile: { type: Image },
        tusername: { type: String },
        tname: { type: String },
        tdesc: { type: String },
        timage: { type: Image },
        tcreated: { type: String },
        tcomment: { type: String },
        tretweet: { type: String },
        tlike: { type: String }
    }
}
</script>

<style>
.tweet {
    padding: 10px 15px 0px 10px;
}

.tweet-header {
    display: flex;
}

.tweet-header b {
    margin-right: 5px;
}

.tweet-header p {
    color: #5b7083;
}

.tweet-info-counts {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
}

.wrap-tweet-profile {
    width: 60px !important;
}

.avatar-tweet {
    width: 50px;
    border-radius: 50%;
}

.tweet-content img {
    border-radius: 15px;
    width: 100%;
    max-width: max-content;
    max-height: 500px;
}
</style>