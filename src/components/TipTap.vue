<template>
    <div style="width: 100%">
    <div style="background-color: #f5f5f5">
      <!--<button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }" style="margin: 10px">
        <v-icon>mdi-format-bold</v-icon>
      </button>
      <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }" style="margin: 10px">
        <v-icon>mdi-format-italic</v-icon>
      </button>
      <button @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('strike') }" style="margin: 10px">
        <v-icon>mdi-format-underline</v-icon>
      </button>
      
      <button @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
        <v-icon>mdi-format-paragraph</v-icon>
      </button>
      <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('paragraph') }" style="margin: 10px;"  >
        <v-icon>mdi-format-header-1</v-icon>
      </button>
      <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }" style="margin: 10px">
        <v-icon>mdi-format-header-2</v-icon>
      </button>
      <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }" style="margin: 10px">
        <v-icon>mdi-format-header-3</v-icon>
      </button>
      <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }" style="margin: 10px">
        <v-icon>mdi-format-list-bulleted</v-icon>
      </button>
      <button @click="editor.chain().focus().undo().run()" style="margin: 10px">
        <v-icon>mdi-undo</v-icon>
      </button>
      <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }" style="margin: 10px">
        <v-icon>mdi-redo</v-icon>
      </button>
      
      <button @click="editor.chain().focus().redo().run()" style="margin: 10px">
        <v-icon>mdi-format-bold</v-icon>
      </button>-->
    </div>
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'



export default {
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
    }
  },
  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },

  watch: {
    modelValue(value) {
      // HTML
      const isSame = this.editor.getHTML() === value

      // JSON
      // const isSame = this.editor.getJSON().toString() === value.toString()

      if (isSame) {
        return
      }

      this.editor.commands.setContent(value, false)
    },
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
      ],
      content: this.modelValue,
      onUpdate: () => {
        // HTML
        this.$emit('update:modelValue', this.editor.getHTML())

        // JSON
        // this.$emit('update:modelValue', this.editor.getJSON())
      },
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },

  // computed: {
  //   blogPost: {
  //     get() {
  //       return this.$store.state.blogMessage;
  //     },
  //     set() {
  //       this.$store.dispatch('SET_BLOG', this.currentMsg);
  //       console.log(this.currentMsg)
  //     },
  //   },
  // },

  // mounted() {
  //   this.editor = new Editor({
  //     extensions: [
  //       StarterKit,
        
  //     ],
  //     content: `
  //       <h2>
  //         Content coming from the previous step.
  //       </h2>
  //     `,
  //   })
  // },

  // beforeUnmount() {
  //   this.editor.destroy()
  // },
}
</script>

<style lang="scss">
/* Basic editor styles */

.my-custom-height{
  height: 90vh;
  min-height: 60vh;
}
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
    padding: 10px;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  button{
    background: gray;
    margin: 5px;
    width: 200px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1;
  }

  code {
    display: block;
    white-space: pre-wrap;
    font-size: 0.8rem;
    padding: 0.75rem 1rem;
    background-color:#e9ecef;
    color: #495057;
  }

  pre {
    background: #0D0D0D;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0D0D0D, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0D0D0D, 0.1);
    margin: 2rem 0;
  }
}
</style>
