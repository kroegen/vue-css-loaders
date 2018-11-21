<template>
    <div class="loader">
        <component
            :is="currentLoader"
            :color="currentColor"
        />
    </div>
</template>

<script>
import Default  from './loaders/Default';
import Spinner  from './loaders/Spinner';
import Roller   from './loaders/Roller';
import Ellipsis from './loaders/Ellipsis';
import DualRing from './loaders/DualRing';

export default {
    name: 'loader',

    components: {
        default     : Default,
        spinner     : Spinner,
        roller      : Roller,
        ellipsis    : Ellipsis,
        'dual-ring' : DualRing,
    },

    props: {
        color: {
            default : 'grey',
            type    : String,
        },
        loaderType: {
            default : null,
            type    : String,
        },
    },

    computed: {
        currentLoader() {
            return this.loaderType || null;
        },
        currentColor() {
            return this.color;
        },
    },
}

</script>

<style lang="scss">
@mixin flex-container($direction: row, $spacing: flex-start, $alignment: center) {
    display: flex;
    flex-direction: $direction;
    justify-content: $spacing;
    align-items: $alignment;
    flex-wrap: wrap;
}

.loader {
    @include flex-container(row, center, center);
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 9;
    background: white;
    opacity: .8;
    left: 0px;
    right: 0px;
}
</style>
