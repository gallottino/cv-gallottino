<script setup>
import IconWidget from '../widgets/IconWidget.vue';

const props = defineProps(['content'])
</script>
<template>
    <div :id="props.content.title">
        <div class="company-name title-fixed"><IconWidget :icon="props.content.icon"></IconWidget> {{ props.content.title }} - {{ props.content.subTitle }}</div>

        <hr>
        <br>
        <div class="status-bar">
            <p class="status-bar-field">where: <strong>{{ props.content.where }}</strong></p>
            <p class="status-bar-field">from: <strong>{{ props.content.startDate }}</strong></p>
            <p class="status-bar-field">to: <strong>{{ props.content.endDate }}</strong></p>
        </div>
        <br>
        <ul class="tree-view">
            {{ props.content.description }}
        </ul>
        <ul class="tree-view">
            <ul>
                <li v-for="bullet in props.content.bulletList" :key="bullet">{{ bullet }}</li>
            </ul>
        </ul>
        <br>
        <div class="status-bar">
            <p class="status-bar-field">
                {{ props.content.tecnologies }}
            </p>
        </div>
        <br>
        <br>
    </div>
</template>