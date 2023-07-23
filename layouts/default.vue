<template>
    <div>
        <header class="header w-100 p-4">
            <v-container class="d-flex justify-space-between align-center">
                <div class="logo">
                    <NuxtLink to="/">
                        <img
                            class="logo-img"
                            src="@/assets/images/logo.png" 
                        />
                    </NuxtLink>
                </div >

                <div class="d-flex align-center justify-space-between w-auto">
                    <v-list class="d-flex align-center gap-1 bg-transparent ">                        
                        <v-list-item 
                            v-for="(link, index) in  links" :key="index"
                            class="p-0 ">
                            <NuxtLink
                                to="/" 
                                class="hover text-xs text-grey-darken-2  pointer text-decoration-none ">
                                {{link}}
                            </NuxtLink>
                        </v-list-item >                                              
                    </v-list>

                    <v-btn variant="outlined" rounded='0' class="text-h5 ml-4 text-grey-darken-2 hover">
                       Write Tributes
                    </v-btn>
                </div>
            </v-container>  
        </header>

        <main>
            <slot></slot>
        </main>

        <footer class=" footer py-4  " >
            <v-container class="footer-container d-flex flex-column align-center">
                <img
                    class="logo-img"
                    src="@/assets/images/logo.png" 
                />
                <h3 class="footer-title cabinet text-white text-uppercase">
                    Queen Elizabeth alexandra mary windsor
                </h3>
                <div>
                    <span class="label text-capitalize  text-grey-darken-2 ">
                        Forever in our hearts <span class="text-white">🕊</span><span class="text-red-darken-2">❤</span>
                    </span>
                </div>
            </v-container>
        </footer> 

    </div>
</template>

<style scoped>
    
    .header{
        box-shadow: inset 0px 2px 12px 0px rgba(231, 232, 233, 0.04);
        background-color: #1B1C1E;
        height: 100px;
        font-size: 18px;
    }
    
    .logo{
        cursor: pointer;
    }
    .logo-img{
        height: 48px;
        width: 44px;
    }

    .font-sm{
        font-size: 14px;
    }

    .hover:hover{
        color: #eee !important;
        transition: all .2s;
    }

    .footer{
        background: #1B1C1E;
    }

    .footer-container {
        gap: 10px;
    }

    .footer-title {
        font-size: 26px;
        font-weight: 700;
        line-height: 32px;
        letter-spacing: 0em;
        text-align: left;

    }

    .label {
        font-size: 16px;
        font-style: italic;
        font-weight: 401;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;

    }

   

    
</style>

<script setup lang="ts">

    const links = ref([
        'Home', 'Biography', 'Timeline', 'Gallery', 'Tributes' 
    ])

</script>
