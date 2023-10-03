<template>

    <div class="DropDown" :class="{'DropDown--blueStyle':styleBlue, 'DropDown--blackStyle':(blackStyle || goldStyle), 'DropDown--goldStyle': goldStyle}">
        <p class="DropDown__title">{{title}}</p>
        <button @click="focusInput" ref="field" class="DropDown__field" :class="{'DropDown__field--open':(isOpen && !multiSelect)}">
            <div class="DropDown__field_input" ref="fieldInput">
                <img v-if="actualOption?.img" :src="actualOption?.img" class="DropDown__field_selectWrap-option-img" alt="">
                <span v-if="multiSelect">{{ chosenOptionsToShow }}</span>
                <!-- <span v-else> {{actualOption.name}}</span>  -->
                <input @input="inputSearch" class="DropDown__field_input-input" ref="input" @focus="openMenu" @blur="closeMenu" v-model="inputToShow" type="text">
            </div>
            <div class="DropDown__field_arrowDiv">  
                <div class="DropDown__field_arrowDiv-circle" :class="{'DropDown__field_arrowDiv-circle--open':isOpen}">
                    <img src="@/assets/icons/arrowDown.svg" alt="">
                </div>
            </div>

            <div class="DropDown__field_selectWrap" :class="{'DropDown__field_selectWrap--open':isOpen}"> 
                <div @click="resetChoice" v-if="multiSelect" class="DropDown__field_selectWrap-option">Любой</div>
                <div v-for="(option, idx) in optionsListToShow" :key="idx" @click.stop="chooseOption(option.id)" class="DropDown__field_selectWrap-option">
                    
                    <!-- <BaseCheckbox v-model="option.isChosen" :blackStyle="blackStyle" v-if="multiSelect"/> -->
                    <img v-if="option.img" :src="option.img" class="DropDown__field_selectWrap-option-img" alt="">
                    {{option.name ? option.name : option}}
                </div>
            </div>


        </button> 
    </div>
</template>
<script>
export default{
    data(){
        return{
            isOpen: false,
            optionsListNew: [],
            optionsListToShow: [],
            actualOption: null,
            inputToShow: "Не выбрано",
            
        }
    },
    computed:{
        chosenOptions(){
            return this.optionsListNew.filter(el => el.isChosen)
        },
        chosenOptionsToShow(){
            return this.optionsList.find(el =>el.id == this.actualOption)
        },
    },
    props:{
        optionsList: Array,
        title: String,
        multiSelect:{
            type: Boolean,
            default: false,
        },
        styleBlue:{
            type: Boolean,
            default: false,
        },
        blackStyle:{
            type: Boolean,
            default: false,
        },
        goldStyle:{
            type: Boolean,
            default: false,
        },
        triggerClear: {
            type: Number,
        },
        modelValue: Array, 
    },
    created(){
        this.optionsListNew = [...this.optionsList]

        this.optionsListNew = this.optionsListNew.map((el, idx) => {
           if (typeof(el) == 'string'){
            return {
                name: el,
                isChosen: false,
                idx: idx,
            }
           }
           else{
            el.isChosen = false;
            return el
           }
        })
        this.optionsListToShow = [...this.optionsListNew]
        this.actualOption = this.optionsListNew[0]
        ////console.log(this.optionsListNew);
        // this.$emit('update:modelValue', [0])  
    },
    mounted(){
        this.$refs.fieldInput.style.maxWidth = `${this.$refs.fieldInput.getBoundingClientRect().width}px`
    },
    methods:{
        openMenu(){
            if(!this.isOpen){
                this.isOpen = true
                this.inputToShow = ""
                this.inputSearch()
            }
        },
        closeMenu(){
            setTimeout(() => {
                this.isOpen = false
                this.$refs.input.blur()
                this.inputToShow = this.actualOption.name
                console.log('modelValue', this.modelValue);
                if(this.modelValue == null){
                    this.$emit('update:modelValue', 0)
                }
            }, 100)
        },  
        chooseOption(idx){
            console.log('@@', idx, this.chosenOptions);
            if(this.multiSelect){
                this.$emit('update:modelValue', this.chosenOptions)
            }
            else{
                ////console.log("@@@@@@");
                console.log(this.optionsListNew);
                this.actualOption = this.optionsListNew.find(el => el.id == idx) 
                console.log("@@", this.actualOption)
                this.inputToShow = this.actualOption.name
                console.log([idx], this.optionsList);
                this.$emit('update:modelValue', idx)
                this.closeMenu()
            }
        },
        resetChoice(){
            this.optionsListNew.map(el =>{
                el.isChosen = false
                this.closeMenu()
            })
        },
        focusInput(){
                if(!this.isOpen){
                    console.log('focusInput');
                    console.log(this.isOpen);
                    this.$refs.input.focus()
                }
        },
        inputSearch(){
            this.optionsListToShow = this.optionsListNew.filter(el => el.name.includes(this.inputToShow)) 
        },
    },
    watch:{
        triggerClear(value){
            this.inputToShow = "Не выбрано"
        }
    }
}
</script>
<style lang="scss" scoped>
    // @import '@/style/template.scss';
    .DropDown{
        width: 100%;
        &--blueStyle{
            .DropDown__field{
                background-color: var(--lightBlue);
            }
            .DropDown__field_selectWrap{
                background-color: var(--lightBlue);
            }
            .DropDown__field_selectWrap-option:hover{
                background-color: var(--accentBlue);
            }
            .DropDown__field_arrowDiv-circle{
                background-color: white,
            }
        }
        &--blackStyle{
            .DropDown__field{
                background-color: black;
                border: 1px solid white;
                &_input{
                    color: white;
                }
            }
            .DropDown__field_arrowDiv-circle{
                & > img{
                    filter: brightness(0%);
                }
            }
            .DropDown__field_selectWrap{
                background-color: black;
                border: 1px solid white;
                &-option{
                    color: white;
                }
            }
            .DropDown__field_selectWrap-option:hover{
                background-color: rgb(20, 20, 20)
            }
            .DropDown__field_arrowDiv-circle{
                // background-color: white,
                & > img{
                    filter: invert(1);
                    width: 10px;
                }
            }
        }
        &--goldStyle{
            .DropDown__field{
                border: 1px solid var(--gold);
            }
            .DropDown__field_selectWrap{
                border: 1px solid var(--gold);
            }
        }
        &__title{
            color: #81858D;
            margin-bottom: 5px;
            font-size: 14px; 
        }
        &__field{
            // background-color: rgb(0, 0, 0);
            width: 100%;
            height: 55px;
            border-radius: 6px;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            position: relative;
            cursor: pointer;
            background: white;
            border: 1px solid var(--strokeGray);
            &--open{
                // border-radius: 6px 6px 0 0;
                .DropDown__field_selectWrap{
                    box-shadow: 0px 11px 10px rgba(158, 158, 158, 0.15);
                }

                .DropDown__field_input{
                    opacity: 0.4;
                }
            }
            
            &_input{
                max-width: 70%;
                height: 100%;
                flex-grow: 1;
                padding-left: 15px;
                margin-right: 10px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                @include baseText;
                transition: .2s opacity;
                overflow: hidden;
                background: white;
                &-input{
                    @include baseText;
                    // background: black;
                    &--hideCaret{
                        caret-color: transparent; 
                    }
                }
            }
            &_arrowDiv{
                flex-shrink: 0;
                padding-right: 13px;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                &-circle{
                    width: 27px;
                    height: 27px;
                    color: white;
                    font-size: 50px;
                    line-height: 50px;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    border-radius: 24px;
                    width: 20px;
                    height: 20px;
                    transition: 0.2s transform;
                    // background: black;
                    &--open{
                        transform: rotate(-180deg);
                    }
                    img{
                        width: 10px;
                        object-fit: contain;
                        transform: rotate(0deg);
                        // filter: invert(1);
                    }
                }
            }
            &_selectWrap{
                position: absolute;
                bottom: 0;
                margin-top: 20px;
                left: 0;
                width: 100%;
                max-height: 230px;
                // background-color: bisque;
                opacity: 0.4;
                transform: translateY(calc(100% + 10px));
                opacity: 0;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                overflow-y: auto;
                z-index: 2;
                scrollbar-width: thin;
                pointer-events: none;
                border-radius: 6px ;
                background-color: white;
                transition: .2s;
                overflow: auto;
                &::-webkit-scrollbar{
                    width: 5px;  
                    height: 6px;             /* width of the entire scrollbar */
                    // background-color: black;
                    }
                    
                    &::-webkit-scrollbar-track {
                    background: rgb(241, 241, 241);
                    border-radius: 5px;
                    width: 4px;
                    height: 4px;
                    }
                    
                    &::-webkit-scrollbar-thumb {
                    // background-color: rgb(255, 183, 0);    /* color of the scroll thumb */
                    background-color: rgba(0, 0, 0, 0.288);
                    border-radius: 20px;       /* roundness of the scroll thumb */
                    // border: 0px solid orange;  /* creates padding around scroll thumb */
                    width: 4px;
                }
                &--open{
                    pointer-events: all;
                    opacity: 1;
                }
                &-option{
                    height: 55px;
                    flex-shrink: 0;
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    padding-left: 35px;
                    @include baseText;
                    
                    &:hover{
                        background-color: var(--lightBlue);
                    }
                    &-img{
                        height: 1em;
                        margin-right: 6px;
                    }
                }
            }
        }
    }
    @media screen and (max-width: $mediaQuery2) {
        $mobileTextSize: 4vw;
        .DropDown__field_input-input{
            font-size: $mobileTextSize;
        }
        .DropDown__field_selectWrap-option{
            font-size: $mobileTextSize;
        }
    }
</style>