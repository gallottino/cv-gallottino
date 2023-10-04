<script setup>
import SectionContent from './SectionContent.vue';
const props = defineProps(['title', 'listContent'])

</script>

<template>
    <div class="window" >
        <div class="title-bar">
            <div class="title-bar-text title-fixed">{{ props.title }}</div>
            <div class="title-bar-controls">
            <button aria-label="Help"></button>
        </div>
        </div>

        <SectionContent 
            v-for="content in props.listContent" 
            class="content"
            :id="content.title"
            :key="content.title"
            :content="content"
         ></SectionContent>

    </div>
</template>

<style>

    .title-fixed{
        font-size: 2em;
    }

    .content {
        margin: 1em;
    }

</style>