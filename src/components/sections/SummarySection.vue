<script setup>
import IconWidget from '../widgets/IconWidget.vue';
const props = defineProps(['firstName', 'jobTitle', 'lastName', 'fields'])

</script>

<template>

    <section id="details">
        <img src="@static/profile_dither.png" width="250" height="250">
        <p style="font-style: italic;">This profile picture is composed only by ⬛ and ⬜ pixels</p>
        <p>See <a href="https://en.wikipedia.org/wiki/Dither">dithering</a> for more info and check the <a href=https://github.com/gallottino/dithering-algorithms>code </a></p>
        <h2>{{props.firstName}} {{ props.lastName }}</h2>
        <hr/>
        <h3>{{ props.jobTitle }}</h3>
 
        <fieldset class="fields-content">
            <legend>Contacts</legend>
            <div v-for="field in props.fields" 
                :key="field.label">
                <div style="padding: 1em;">
                    <a :href="field.url"><IconWidget class="centered" :icon="field.icon"></IconWidget></a>
                    <input id="text22" type="{{ field.type }}" :value="field.value" readonly/>
                    
                </div>
            </div>
        </fieldset>
        <br>
        <blockquote>
            There are 10 kinds of people in the world: those who understand binary and those who don't.
        </blockquote>
        <br>

    </section>

</template>

<style scoped>
    .fields-content {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        padding: 1em;
    }

    .centered {
        vertical-align: middle;
        margin-right: 1em;
    }

</style>