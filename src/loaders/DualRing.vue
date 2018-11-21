<template>
    <div class="lds-dual-ring"></div>
</template>

<script>
import { handleAddRule } from './../utils/baseUtils';

export default {
    name: 'dual-ring',

    props: ['color'],

    watch: {
        color(value) {
            const rule = `border: 5px solid ${value}; border-color: ${value} transparent ${value} transparent;`;
            const selector = '.loader .lds-dual-ring:after';

            handleAddRule(selector, rule);
        }
    },

    created() {
        const rule = `border: 5px solid ${this.color}; border-color: ${this.color} transparent ${this.color} transparent;`;
        const selector = '.loader .lds-dual-ring:after';

        handleAddRule(selector, rule);
    },
}

</script>

<style lang="scss">
.lds-dual-ring {
    display: inline-block;
    width: 64px;
    height: 64px;

    &:after {
        content: " ";
        display: block;
        width: 46px;
        height: 46px;
        margin: 1px;
        border-radius: 50%;
        border: 5px solid grey;
        border-color: grey transparent grey transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
