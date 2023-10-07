<script setup lang="ts">

</script>
<template>
    <div>
        <div class="header">
            <div class="header__main">

                <template v-if="$route.name == 'home'">
                        <img class="header__main_img" src="@/assets/icons/logo.png" alt="">
                        <h2 class="header__main_title">Книга контактов</h2>
                </template>

                <template v-if="$route.name == 'edit'">
                        <div></div>
                        <h2 class="header__main_title">Книга контактов</h2>
                        <img @click="$router.push({name: 'home'})" src="@/assets/icons/cross.svg" class="header__main_cross" alt="">
                </template>
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
            margin: 0 48px;
            display: flex;
            align-items: center;
            justify-content: space-between;
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
            &_cross{
                opacity: 0.7;
                cursor: pointer;
                &:hover{
                    opacity: 1;
                }
            }
        }
    }
</style>