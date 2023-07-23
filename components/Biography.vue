<template>
    <div class=" bg-white w-100 py-auto">
        <v-container class="my-10 h-70 d-flex flex-column justify-center">
            <div class="biography-header d-flex flex-column align-self-start py-4 mt-4">
                <div class="title cabinet">BIOGRAPHY</div>
                <span class="subtitle">A short account of Queen Elizabeth II’s Life</span>
            </div>

            <div class="biography-content mt-8">
                <v-container fluid class="mx-0 px-0">
                    <div class="bio-grid">
                        <div
                            class="biography-item item-1"
                        >
                        <img                                
                            src="@/assets/images/pic1.png" alt="/" class="bio-img"
                        >
                        </div>

                        <div                     
                            class="biography-item item-2"
                        >
                        <img                                
                            src="@/assets/images/pic2.png" alt="/" class="bio-img"
                        >
                        </div>

                        <div 
                            class="biography-item item-3"
                        >
                            <v-sheet class="bio-text">
                                Elizabeth Alexandra Mary Windsor was born in Mayfair, 
                                London, as the first child of the Duke & Duchess of York 
                                (later King George VI and Queen Elizabeth). Her father acceded to the 
                                throne in 1936 upon the abdication of his brother, King Edward VIII, making 
                                Elizabeth the heir presumptive. She was educated privately at home and began to 
                                undertake public duties during the Second World War,
                                serving in the Auxiliary Territorial Service.s
                            </v-sheet>
                        </div>
                        <div                     
                            class="biography-item item-3"
                        >
                        <img                                
                            src="@/assets/images/pic3.png" alt="/" class="bio-img"
                        >
                        </div>
                        <div 
                            class="biography-item item-4"
                        >
                            <v-sheet class="bio-text d-flex flex-column justify-start mb-1">
                                In November 1947, she married Philip Mountbatten, 
                                a former prince of Greece and Denmark, and their marriage lasted 
                                73 years until his death in April 2021. They had four children: Charles III; 
                                Anne, Princess Royal; Prince Andrew, Duke of York; and Prince Edward, Earl of Wessex. 
                                Elizabeth II was Queen of the United Kingdom from 6 February 1952 until her death in 2022. 
                                Her reign of 70 years and 214 days was the longest of any 
                                British monarch and the second-longest recorded of any monarch of a sovereign country. 
                                At the time of her death, 
                                Elizabeth was also Queen of 14 other Commonwealth realms in addition to the United Kingdom.
                            </v-sheet>
                            <span class="read-more d-flex align-center">
                                Read More  <img src="@/assets/images/arrow.svg" alt="">
                            </span>
                        </div>
                        <div                     
                            class="biography-item 5"
                        >
                        <img                                
                            src="@/assets/images/pic4.png" alt="/" class="bio-img"
                        >
                        </div>

                    </div>
                </v-container>
            </div>
        </v-container>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .title {
        font-size: 40px;
        font-weight: 700;
        line-height: 50px;
        letter-spacing: 0em;
        text-align: left;
        color: #1B1C1E; 
    }

    .subtitle {        
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;
        color: #1B1C1E;
    }

    .bio-grid{
        display: grid;

        grid-template-columns: 250px repeat(2, 1fr);
        grid-template-rows: 290px max-content;
        grid-gap: 20px;
    }

    .biography-item {
        overflow: hidden;
        width: 100%;
    }

    .bio-img {
        object-fit: cover;
        object-position: center;
        
    }

    .bio-text {
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;
        color: #1B1C1E;;
    }

    .read-more{
        font-size: 16px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;

    }

</style>