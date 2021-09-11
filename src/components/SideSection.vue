<template>
  <div>
    <v-row>
        <h3 class="ml-5 mt-12 mb-0">Performance</h3>
        <v-card elevation="0" style="border: 0.075rem solid #E0E0E0" width="80%" class="mx-6 my-2">
            <v-col md="12">
                <v-row class="px-5 py-3">
                    <v-col md="10">
                        <v-row>Power Words</v-row>
                        <v-row>{{this.countOfPowerWords}}/{{this.powerWords.length}}</v-row>
                    </v-col>
                    <v-col md="1">
                        <v-icon>mdi-information-outline</v-icon>
                    </v-col>
                </v-row>
                
            </v-col>
            <v-divider light></v-divider>
            <v-col md="12">
                <v-row class="px-5 py-3">
                    <v-col md="10">
                        <v-row>Readibility</v-row>
                        <v-row>0/1</v-row>
                    </v-col>
                    <v-col md="1">
                        <v-icon>mdi-information-outline</v-icon>
                    </v-col>
                </v-row>
            </v-col>
            <v-divider light></v-divider>
            <v-col md="12">
                <v-row class="px-5 py-3">
                    <v-col md="10">
                        <v-row>Words Count</v-row>
                        <v-row>{{words}}</v-row>
                    </v-col>
                   
                </v-row>
            </v-col>
        </v-card>
    </v-row>
    <v-row>
        <h3 class="ml-5 mt-5 mb-0">Add-ons</h3>
        <v-card elevation="0" style="border: 0.075rem solid #E0E0E0" width="80%" class="mx-6 my-2">
            <v-col md="12">
                <v-row class="px-5 py-3">
                    <v-btn color="#6200ea"><span class="white--text">Fact Check</span></v-btn>
                </v-row>
            </v-col>
        </v-card>
    </v-row>
    <v-row>
        <v-col md="12">
        <h3 class="ml-3 mt-5 mb-0">Keywords to Use</h3>
        </v-col>
        <v-chip-group v-for="tag in tags" :key="tag.name" column class="ml-6 my-0 mx-0">
            <v-chip v-if="tag.status" style="background-color: #00c853" class="mx-0 my-0" small text-color="white">
                <span>{{tag.name}}</span>
            </v-chip>
            <v-chip v-else style="background-color: #e91e63" small class="mx-0 my-0" text-color="white">
                <span>{{tag.name}}</span>
            </v-chip>
        </v-chip-group>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data: () => ({
      countOfPowerWords: 0,
      tags: [
        {name:'Work',status: false},
        {name:'Home Improvement',status: false},
        {name:'Vacation',status: false},
        {name:'Food',status: false},
        {name:'Drawers',status: false},
        {name:'Shopping',status: false},
        {name:'Art',status: false},
        {name:'Tech',status: false},
        {name:'Creative Writing',status: false},
        {name:'Dan Brown',status: false},
        {name:'AI',status: false},
        {name:'neural networks',status: false},
        {name:'big data',status: false},    
      ],
      powerWords: [
        {name:'Happy',status: false},
        {name:'jolly',status: false},
        {name:'stunning',status: false},
        {name:'savvy',status: false},
        {name:'excellent',status: false},
        {name:'bliss',status: false},
        {name:'funniest',status: false},
        {name:'Hack',status: false},
        {name:'Latest',status: false},
      ],
    }),
    computed:{
        ...mapGetters(['message','words']),
        // tags:function(){
        //     this.tags.forEach((x) => {
        //         if(this.message.toLowerCase().includes(x.name.toLowerCase())){
        //             console.log(x,"is present in", this.message)
        //             x.status = true
        //         }
        //     })
        // }
    },
    watch:{
        message:function(newC,old){
            console.log("chnage from", old, "to ,", newC)
            this.tags.forEach((x) => {
                if(newC.toString().toLowerCase().includes(x.name.toLowerCase())){
                    console.log(x,"is present in", newC)
                    x.status = true
                }
                else{
                    x.status = false
                }
            })
            this.powerWords.forEach((x) => {
                if(newC.toString().toLowerCase().includes(x.name.toLowerCase())){
                    console.log(x,"is present in", newC)
                    x.status = true
                }
                else{
                    x.status = false
                }
                
            })
            this.countOfPowerWords = 0
            this.powerWords.forEach((x) => {
                if(x.status)
                    this.countOfPowerWords = this.countOfPowerWords + 1
            })

        },
    },
    mounted: function(){
        this.words = this.message.split(" ").length()
        this.tags.forEach((x) => {
                if(this.message.toString().toLowerCase().includes(x.name.toLowerCase())){
                    console.log(x,"is present in", this.message)
                    x.status = true
                }
                else{
                    x.status = false
                }
            })
            this.powerWords.forEach((x) => {
                if(this.message.toString().toLowerCase().includes(x.name.toLowerCase())){
                    console.log(x,"is present in", this.message)
                    x.status = true
                }
                else{
                    x.status = false
                }
                
            })
            this.countOfPowerWords = 0
            this.powerWords.forEach((x) => {
                if(x.status)
                    this.countOfPowerWords = this.countOfPowerWords + 1
            })

    
    }

}
</script>

<style>

</style>