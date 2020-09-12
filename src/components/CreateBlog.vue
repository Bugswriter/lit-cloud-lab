<template>
<div id="create-blog">
  <h1 class="title">Create Blog</h1>
  <h2 class="subtitle">Write a new cool blog here</h2>
  <editor ref="editor" :config="config" :initialized="onInitialized" @save="onSave"/>
  <button class="button is-info" @click="save">Publish</button>
</div>
</template>

<script type="text/javascript">
export default {
    data(){
        return {
            config: {
                image: {
                    endpoints: {
                    },
                    field: 'image',
                    types: 'image/*',
                },
            }
        }
    },
    methods: {
        onSave(response){
            console.log("save this data", response);
        },
        save(){
            console.log(this.$refs.editor);
        }
    }
}
</script>
