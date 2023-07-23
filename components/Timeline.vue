<template>
    <div class="bg-white w-100 p-4">
        <v-container>
            <div class="d-flex justify-space-between align-center w-100 mb-1">
                <div>
                    <h3 class="timeline-title cabinet">TIMELINE</h3>
                    <p class="timeline-text">
                        Key dates in the life of the Queen, from her 
                        birth in April 1926 to her death in September 2022
                    </p>
                </div>
                <span class="d-flex align-center">
                    <span class="see-all">See All</span> 
                    <img src="@/assets/images/arrow.svg" alt="/">
                </span>
            </div>

            <div class="mt-6">
                <div class="timeline-content d-flex justify-space-between align-center ">
                    <div class="px-2 timeline-item d-flex flex-column align-center">
                        <img src="@/assets/images/pic1.png" alt="/" class="info-img">
                        <div class="timeline-info d-flex justify-space-between align-start w-100">
                            <span class="date cabinet">1926</span>
                            <span class=" timeline-text">
                                On the 21st of April, 1926, 
                                Princess Elizabeth Alexandra Mary Windsor is born at 2.40am at 17 
                                Bruton Street, London, her maternal grandparents’ house. It was home to 
                                her parents, Elizabeth and Albert, Duke of York, the second son of King 
                                George V and Queen Mary. 
                                She was third in line to the throne behind her father and Edward, Prince of Wales.
                            </span>
                        </div>
                    </div>

                    <div class="px-2 timeline-item d-flex flex-column align-center">
                        <img src="@/assets/images/pic6.png" alt="/" class="info-img">
                        <div class="timeline-info d-flex justify-space-between align-start w-100">
                            <span class="date cabinet">1930s</span>
                            <span class=" timeline-text">
                                In August 1930, Elizabeth’s sister, 
                                Princess Margaret Rose, is born. On the 20th of January 
                                1936, George V dies. Edward VIII becomes king.  
                                On the 10th of December 1936, Edward VIII abdicates so that 
                                he can marry the American divorcee Wallis Simpson. 
                                In 1937, Elizabeth becomes a Girl Guide at the age of 11.
                            </span>
                        </div>
                    </div>

                    <div class="px-2 timeline-item d-flex flex-column align-center">
                        <img src="@/assets/images/pic5.png" alt="/" class="info-img">
                        <div class="timeline-info d-flex justify-space-between align-start w-100">
                            <span class="date cabinet">1940s</span>
                            <span class=" timeline-text">
                                On the 13th of October, 1940, Elizabeth makes 
                                her first broadcast to the nation. On the 21st of 
                                April 1942, on her 16th birthday, Elizabeth carries 
                                out her first public engagement when she inspects the 
                                Grenadier Guards, of which she had been appointed colonel-in-chief. 
                                In 1944, she receives her first corgi, Susan, 
                                as an 18th birthday present.
                            </span>
                        </div> 
                    </div>
                </div>
            </div>
            


        </v-container>
    </div>
</template>

<script lang="ts" setup>
 
    const timelineInfo = ref([
        
        
        {
            img: "../assets/images/pic5.png",
            date: "1940s",
            text: ""
        }
    ])

</script>

<style lang="scss" scoped>
.timeline-title {
    font-size: 40px;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: 0em;
    text-align: left;
}

.timeline-text {
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
}

.see-all {
    font-size: 16px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
}

.timeline-content {
    gap: 30px;
    // height: 600px;
}

.timeline-item {
    max-width: 390px;
    gap: 25px;
    // overflow: hidden;
    border-left: 1px solid #1B1C1E;
    border-right: 1px solid #1B1C1E;
    height: 700px;
}

.info-img {
    width: 365px;  
    object-fit: contain;
    // height: 368px;
}

.timeline-info {
    gap: 10px;
    // height: 320px;
} 

.date {
    font-size: 30px;
    font-weight: 700;
    line-height: 37px;
    letter-spacing: 0em;
    text-align: left;

}
</style>