<template>
    <div class="tribute w-100 p-4  ">
        <v-container class="container "> 
            <div class="d-flex justify-space-between align-center w-100 mb-4">
                <div>
                    <h3 class="tribute-title cabinet text-white">TRIBUTES</h3>
                    <p class="tribute-text text-grey-darken-2">
                        World leaders pay tribute to Queen Elizabeth II
                    </p>
                </div>
                <span class="d-flex align-center">
                    <span class="see-all">See All</span> 
                    <img src="../assets/images/arrow-2.svg" alt="/">
                </span>
            </div>

            <div class="tribute-content d-flex justify-space-between align-center ">
                <div class="tribute-card ">
                    <div class="d-flex justify-space-between inner-card mb-4">
                        <img src="@/assets/images/buhari.png" alt="/" class="tribute-img">
                        <p class="tribute-text text-grey-darken-2">
                            The story of modern Nigeria will never be complete without
                            a chapter on Queen Elizabeth ll, a towering global personality
                            and an outstanding leader. She dedicated her life to making her
                            nation,
                            the Commonwealth and the entire world a better place.”
                        </p>
                    </div>
                    <span class="card-name">
                        <h6 class="president text-white cabinet">Muhammadu Buhari</h6> 
                        <p class="country text-grey-darken-2">President of Nigeria</p>
                    </span> 
                </div>

                <div class="tribute-card">
                    <div class="d-flex justify-space-between inner-card mb-4">
                        <img src="@/assets/images/macron.png" alt="/" class="tribute-img">
                        <p class="tribute-text text-grey-darken-2">
                            “Her Majesty Queen Elizabeth II embodied the British nation’s
                            continuity and unity for over 70 years. I remember her as a friend of France, a kind-hearted queen
                            who has left a lasting impression on her country and her century.”
                        </p>
                    </div>
                    <span class="card-name">
                        <h6 class="president text-white cabinet">Emmanuel Macron </h6>
                        <p class="country text-grey-darken-2">President of France</p>
                    </span>
                </div>
            </div>

        </v-container>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .tribute{
        background: #1B1C1E;
        height: 80vh;
        margin-top: 50px;
        border-bottom: 1px solid #E7E8E9
    }

    .container{
        padding-top: 50px;
        
    }

    .tribute-title{
        font-size: 40px;
        font-weight: 700;
        line-height: 50px;
        letter-spacing: 0em;
        text-align: left;

    }

    .see-all{
        font-size: 14px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: right;
        color: #fff;
        padding-right: 4px;
        margin-right: 1px;
    }

    .tribute-text {
        font-size: 16px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;

    } 

    .tribute-content{
        gap: 50px;
        margin-top: 35px;
    }

    .inner-card{
        gap: 20px;
    }

    .tribute-img {
        width: 40%;
        border-radius: 3px;
    }

    .president{
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;

    }

    .country {
        font-size: 14px;
        font-style: italic;
        font-weight: 401;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
    }

</style>