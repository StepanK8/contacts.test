<script setup lang="ts">
const props = defineProps({
    style: String, 
    icon: String, 
    isLoading: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <div 
        class="button" 
        :class="{
            'button--transparent': style == 'transparent',
            'button--border': style == 'border',
        }"

    >
        <img v-if="isLoading" class="button__loader"  src="@/assets/icons/loader.png" alt="">
        <template v-else>
            <img v-if="icon == 'save'" src="@/assets/icons/save.png" alt="">
        </template>
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
        font-size: var(--s-text-size);
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
        &__loader{
            animation: spin 1.3s linear infinite;
        }
    }

    .button--transparent{
        background: transparent;
        color: var(--mainColor);
        text-transform: none;
        font-weight: 400;
        &:hover{
            background: var(--stroke);
        }
    }

    .button--border{
        background: transparent;
        color: var(--mainColor);
        text-transform: none;
        border: 1px solid var(--mainColor);
        border-radius: 100px;
        &:hover{
            background: var(--stroke);
        }
    }

    @keyframes spin {
        from{
            transform: rotate(0);
        }
        to{
            transform: rotate(360deg);
        }
    }
</style>