<template>
  <div class="home">
    <v-col md="12">
      <v-row>
        <v-col md="2">
                 
          <v-navigation-drawer permanent>
          <v-img src="@/assets/longshot.png" style="width:80%" class="my-3"></v-img>
            <v-list-item style="background-color: #f5f5f5">
              <v-list-item-content>
                <v-list-item-title class="text-p">
                  <b>Project</b>
                </v-list-item-title>
                <v-list-item-subtitle>
                  My First Project
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
              dense
              nav
            >
              <v-list-item
                v-for="item in items"
                :key="item.title"
                link
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-col>
        
        <v-col md="8">
          <v-row>
            <v-col style="width:120%" class="m-0 p-0">
              <MainSection />
            </v-col>
          </v-row>
        </v-col>
        
        <v-col md="2">
        <v-row>
            <v-col>
              <v-divider
                vertical
                style="height:100vh"
                class="p-0 m-0"
              ></v-divider>
            </v-col>
            <v-col md="11">
              <SideSection />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
// @ is an alias to /src
import MainSection from "@/components/MainSection.vue"
import SideSection from "@/components/SideSection.vue"

export default {
  name: "Home",
  components:{
    MainSection,
    SideSection
  },
  data () {
      return {
        items: [
          { title: 'Blog', icon: 'mdi-view-dashboard' },
          { title: 'Text Extender', icon: 'mdi-image' },
          { title: 'Repharaser', icon: 'mdi-help-box' },
          { title: 'Headline', icon: 'mdi-view-dashboard' },
          { title: 'Headline Intro', icon: 'mdi-image' },
          { title: 'Blog Ideas', icon: 'mdi-image' },
          { title: 'Blog Insights', icon: 'mdi-box' },
          { title: 'Create FAQs', icon: 'mdi-gift' },
          { title: 'Product Copy', icon: 'mdi-copyright' },
        ],
      }
    },
  
};
</script>
