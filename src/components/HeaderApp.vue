<script setup lang="ts">

</script>
<template>
    <div>
        <div class="header">
            <div class="header__main">
                <img class="header__main_img" src="@/assets/icons/logo.png" alt="">
                <h2 class="header__main_title">Книга контактов</h2>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .header{
        background: var(--deepGray);
        height: 48px;
        width: 100%;
        &__main{
            margin-left: 48px;
            display: flex;
            align-items: center;
            height: 100%;
            &_img{
                width: 42px;
                height: 32px;
                margin-right: 16px;
            }
            &_title{
                @include baseText;
                color: var(--white);
                font-size: var(--l-text-size);
                text-transform: uppercase;
            }
        }
    }
</style>