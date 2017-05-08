<template>
    <div class="modal-mask ui" v-bind:class="{maskColor:hasColor,'mask-black':!hasColor}" v-show="isShow">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: ['maskColor', 'isShow'],
    computed: {
        hasColor: function() {
            return this.maskColor != null;
        }
    }
}
</script>
<style>
.modal-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 100;
}

.mask-black {
    background-color: rgba(29, 29, 29, 0.9);
}
</style>
