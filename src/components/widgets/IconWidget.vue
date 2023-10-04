<script setup>
    import GithubIcon from '../../../asset/icons/GithubIcon.vue';
    import HomeIcon from '../../../asset/icons/HomeIcon.vue';
    import LinkedinIcon from '../../../asset/icons/LinkedinIcon.vue';
    import EmailIcon from '../../../asset/icons/EmailIcon.vue';
    import FiscozenIcon from '../../../asset/icons/FiscozenIcon.vue';
    import NftChainIcon from '../../../asset/icons/NftChainIcon.vue';
    import AmadaIcon from '../../../asset/icons/AmadaIcon.vue'; 
    import LinksFoundationIcon from '../../../asset/icons/LinksFoundationIcon.vue'; 
    import PolitoIcon from '../../../asset/icons/PolitoIcon.vue';
    import FreelanceIcon from '../../../asset/icons/FreelanceIcon.vue';

    const props = defineProps(['icon'])

    const Icons = {
        "GithubIcon": GithubIcon,
        "HomeIcon": HomeIcon,
        "LinkedinIcon": LinkedinIcon,
        "EmailIcon" : EmailIcon,
        "FiscozenIcon": FiscozenIcon,
        "NftChainIcon": NftChainIcon,
        "AmadaIcon": AmadaIcon,
        "LinksFoundationIcon" : LinksFoundationIcon,
        "PolitoIcon" : PolitoIcon,
        "FreelanceIcon" : FreelanceIcon
    }

</script>

<template>
    <component :is="Icons[props.icon]"></component>
</template>