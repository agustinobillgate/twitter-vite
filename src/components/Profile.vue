<template>
    <div class="card">
        <img class="card-img-top" src="../assets/banner.jpg" alt="">
        <div class="profile">
            <div class="main-profile">
                <div class="user-profile">
                    <img src="../assets/profile.jpg" alt="">
                    <h3>{{name}}</h3>
                    <p>@{{username}}</p>
                </div>
                <div class="follow-btn">
                    <button>Follow</button>
                </div>
            </div>
            <div class="user-desc">
                <p>{{desc}}</p>
                <div class="sub">
                    <p><i class="fa fa-location-dot"></i> {{location}}</p>
                    <p><i class="fa fa-calendar-days"></i> {{created}}</p>
                </div>
            </div>
            <div class="user-data">
                <b>{{following}}</b>
                <p>Following</p>
                <b>{{follower}}</b>
                <p>Followers</p>
            </div>
        </div>
        <nav class="router-link row">
            <RouterLink to="/tweets" class="col-3 text-center text-decoration-none">Tweets</RouterLink>
            <RouterLink to="/replies" class="col-3 text-center text-decoration-none">Tweets & Replies</RouterLink>
            <RouterLink to="/media" class="col-3 text-center text-decoration-none">Media</RouterLink>
            <RouterLink to="/likes" class="col-3 text-center text-decoration-none">Likes</RouterLink>
        </nav>
    </div>
</template>

<script>

export default {
    props: {
        username: { type: String },
        name: { type: String },
        desc: { type: String },
        created: { type: String },
        location: { type: String },
        following: { type: Number },
        follower: { type: Number }
    }
}
</script>

<style>
.profile {
    position: relative;
    padding: 0px 20px 20px 20px;
}

.main-profile {
    padding: 0;
    display: flex;
    justify-content: space-between;
}

.user-profile {
    padding-top: 70px;
}

.user-profile img {
    position: absolute;
    top: -50px;
    width: 107px;
    height: 100px;
    border-radius: 50%;
    border: solid 2px black;
}

.user-profile h3 {
    font-size: 1.5rem;
    margin: 0;
}

.user-profile p {
    color: #5b7083;
}

.follow-btn button {
    font-size: 1rem;
    border: 3px solid #1da1f2;
    border-radius: 25px;
    background-color: #ffffff;
    padding: 8px 20px;
    margin: 5px;
    font-weight: bold;
    color: #1da1f2;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease-in-out;
}

.follow-btn button:hover {
    color: #ffffff;
    background-color: #1da1f2;
}

.user-desc p {
    margin-bottom: 7px;
}

.sub {
    display: flex;
}

.sub p {
    margin-right: 10px;
    color: #5b7083;
}

.user-data {
    display: flex;
}

.user-data p {
    margin-right: 10px;
    color: #5b7083;
}

.user-data b {
    margin-right: 5px;
}

.router-link .col-3 {
    padding: 10px 0px;
    color: #5b7083;
}

nav a:hover {
    background-color: #eef2f5;
}

.router-link-active {
    border-bottom: solid #1da1f2;
    color: black !important;
}

.router-link {
    font-weight: 500;
}
</style>