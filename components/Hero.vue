<template>
    <div class="px-4 hero w-100">
        <v-container class="pb-0 d-flex py-10">
            <div class="hero-left flex-1-0 text-white h-100">
                <div class="left-content">
                    <div class="mb-1 text-center">                    
                        <img src="@/assets/images/logo.png" alt="" class="left-img">
                    </div>
                    <h1 class="leftHeading cabinet mb-2">Queen Elizabeth II</h1>
                    <p class="leftText mb-2 text-grey-darken-2">
                        "I have in sincerity pledged myself to your service, as so many of you are pledged to mine. 
                        Throughout all my life and with all my heart I shall strive to be worthy of your trust."
                    </p>
                    <div class="w-100 d-flex flex-column align-end mt-2">
                        <p class="leftHeading2 mb-2 cabinet">
                            - Queen Elizabeth Alexandra Mary Windsor
                        </p>
                        <p class="leftText2 text-grey-darken-2">
                            21 April 1926 - 8 September 2022
                        </p>
                    </div>
                </div>
            </div>
            <div class="hero-right flex-1-0 d-flex align-center justify-flex-end h-100">
                
                    <img
                        class="right-img"
                        src="@/assets/images/queen.png"
                        alt="/"
                    >
                
            </div>
        </v-container>
    </div>
</template>

<style scoped>
    .hero {
        background-color: #1B1C1E;
        
    }

    .hero-left{
        position: relative;
    }
    .left-content{
        top: 90px;
        left: 0px;
        width: 580px;
        position: absolute;
    }

    .left-img{        
        width: 118px;
    }
    .leftHeading{
        font-size: 62px;
        font-weight: 700;
        line-height: 79px;
        letter-spacing: 0em;
        text-align: left;
        text-transform: uppercase;
    }

    .leftText {        
        font-size: 18px;
        font-style: italic;
        font-weight: 401;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;
        

    }

    .leftHeading2{
        font-size: 18px;
        font-weight: 500;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
    }

    .leftText2{
        font-size: 16px;
        font-style: italic;
        font-weight: 401;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
    }

    .hero-right{
        position: relative;
        justify-content: flex-end;
    }
    
    .right-img{
        object-fit: contain;
        width: 60%;
    }

</style>