<script setup lang="ts">
const props = defineProps(['style'])
</script>

<template>
    <div 
        class="button" 
        :class="{
            'button--transparent': props.style == 'transparent',
            'button--border': props.style == 'border',
        }"

    >
        <slot></slot>
    </div>
</template>
<style lang="scss">
    .button{
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        font-size: var(--m-text-size);
        background: var(--yellow);
        border-radius: 4px;
        font-weight: 700;
        padding: 0 16px;
        width: auto;
        text-transform: uppercase;
        color: var(--deepGray);
        transition: .1s;
        cursor: pointer;
        & > img{
            width: 16px;
            height: 16px;
        }
        &:hover{
            background: var(--yellowHover);
        }
        &:active{
            background: var(--yellowActive);
        }
    }

    .button--transparent{
        background: transparent;
        color: var(--mainColor);
        text-transform: none;
    }

    .button--border{
        background: transparent;
        color: var(--mainColor);
        text-transform: none;
        border: 1px solid var(--mainColor);
        border-radius: 100px;
    }
</style>