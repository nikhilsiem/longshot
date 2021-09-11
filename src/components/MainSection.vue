<template>
  <div>
    <v-row class="py-2">
    <v-tabs>
        <v-tab>
            <v-icon>mdi-home</v-icon>
            <h4 class="px-2">Home</h4>
        </v-tab>
        <v-tab>
            <v-icon>mdi-numeric-1-box-outline</v-icon>
            <h4 class="px-2">Research</h4>
        </v-tab>
        <v-tab>
            <v-icon>mdi-numeric-2-box-outline</v-icon>
            <h4 class="px-2">Headline</h4>
        </v-tab>
         <v-tab>
           <v-icon>mdi-numeric-3-box-outline</v-icon>
            <h4 class="px-2">Outline</h4>
        </v-tab>
         <v-tab>
            <v-icon>mdi-numeric-4-box-outline</v-icon>
            <h4 class="px-2">Blog</h4>
        </v-tab>
    </v-tabs>
    </v-row>
    <v-row class="editor">
        <el-tiptap
            v-model="content"
            :extensions="extensions"
            :width="1900"
            height="90vh"
            class="editor"
            />
       
    </v-row>

  </div>
</template>

<script>

import { ElementTiptap } from 'element-tiptap';
import {
  // necessary extensions
  Doc,
  Text,
  Paragraph,
  Heading,
  Bold,
  Underline,
  Italic,
  ListItem,
  BulletList,
  
  History
} from 'element-tiptap';

export default {
    name: "MainSection",
    components: {
        'el-tiptap': ElementTiptap,
    },
    data () {
    // editor extensions
    // they will be added to menubar and bubble menu by the order you declare.
    return {
        chatCount:false,
        word:0,
      extensions: [
        new Doc(),
        new Text(),    
        new Bold(), // render command-button in bubble menu.
        new Italic(),
        new Underline(), // render command-button in bubble menu but not in menubar. 
        new Paragraph(),
        new Heading({level: 3}),
        new ListItem(),
        new BulletList(),
        
        new History(),
      ],
      // editor's content
      content: `
        <h1>Heading</h1>
        <p>This Editor is awesome!</p>
      `,
    };
  },
  updated:function(){
      if(this.content){
      this.$store.commit("SET_BLOG", this.content.toString())
        var changecount = this.content.toString().split("><").length
        var wordcount = this.content.toString().split(" ").length 
        console.log(wordcount+changecount - 1)
        this.word = wordcount+changecount - 1
        this.$store.commit("SET_WORDS", this.word)
      }
  },
  methods:{
      show(){
          console.log(this.content.toString())
          var changecount = this.content.toString().split("><").length
          var wordcount = this.content.toString().split(" ").length 
          console.log(wordcount+changecount - 1)
          this.word = wordcount+changecount - 1
        },  
  }

}
</script>

<style>
.box{
    border: none !important;
    border-color: transparent;
}

.editor{
    border-color: none;
    border: none;
}
</style>