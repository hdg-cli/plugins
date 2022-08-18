<template>
    <div class="grid-wrap">
        <div class="grid-inner">
            <div
                class="grid-item"
                v-for="(item, index) in grid_info_arr"
                :style="{
                    background: index === 8 ? draw_btn.bg : current_index === index ? select_grid.bg : default_grid.bg,
                    color: current_index === index ? select_grid.color : default_grid.color
                }"
                :key="index"
                @click="luckClick"
                :data-index="index"
            >
                <button v-if="index === 8" :style="{ color: draw_btn.color }">抽奖</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import luckDraw from './luckDraw.js'
const props = defineProps({
    // 九宫格按钮样式
    default_grid: {
        type: Object,
        default: {
            bg: '#FFF3B2', //每个格子的背景颜色
            color: '#fff' //每个格子的字体颜色
        }
    },
    // 中奖按钮样式
    select_grid: {
        type: Object,
        default: {
            bg: '#ffffff',
            color: '#ffffff'
        }
    },
    // 奖品列表8个格子
    prize_arr: {
        type: Array,
        default: () => [{}, {}, {}, {}, {}, {}, {}, {}]
    },
    // 抽奖/分享按钮图片
    draw_btn: {
        type: Object,
        default: {
            bg: '#fff',
            color: '#000'
        }
    }
})

const current_index = ref(-1)

// 抽奖中
const isDrawing = ref(false)

// 九宫格内容
const grid_info_arr = computed(() => {
    return [...props.prize_arr, props.draw_btn]
})

const emit = defineEmits(['getWinningIndex', 'luckDrawFinish'])

// 点击抽奖按钮
const luckClick = event => {
    if (isDrawing.value) {
        return
    }
    isDrawing.value = true
    let index = Number(event.currentTarget.dataset.index)
    if (index === 8) {
        // 点击抽奖之后知道获奖位置，修改父组件中lottery_draw_param的值
        emit('getWinningIndex', function (res) {
            if (!res) {
                isDrawing.value = false
                current_index.value = -1
                return
            }

            let luck_draw_params = res
            const win = new luckDraw(
                {
                    domData: grid_info_arr.value,
                    ...luck_draw_params
                },
                function (index, count) {
                    current_index.value = index
                    if (luck_draw_params.winningIndex == index && luck_draw_params.totalCount == count) {
                        setTimeout(() => {
                            emit('luckDrawFinish', grid_info_arr.value[index])
                            setTimeout(() => {
                                isDrawing.value = false
                                current_index.value = -1
                            }, 1500)
                        }, 300)
                    }
                }
            )
        })
    }
}
</script>

<style lang="scss" scoped>
$grid_wrap_border_radius: 0.2rem; // 九宫格外层圆角
$grid_wrap_bg: transparent; // 九宫格背景色
$grid_item_margin: 0.12rem; //格子与格子，格子与边框之间的距离
$grid_item_radius: 0.2rem; // 格子圆角
$grid_wrap_width: 6.1rem; //九宫格宽度(包括边框)
$grid_wrap_height: 6.1rem; //九宫格高度
$grid_item_width: 1.9rem; //每个格子的宽度(内层宽-格子间距*4)/3
$grid_item_height: 1.9rem; //每个格子的高度(内层高-格子间距*4)/3
.grid-wrap {
    position: relative;
    background: $grid_wrap_bg;
    border-radius: $grid_wrap_border_radius;
    .grid-inner {
        display: grid;
        justify-content: center;
        align-content: center;
        width: $grid_wrap_width;
        height: $grid_wrap_height;
        margin: 0 auto;
        grid-template-columns: repeat(3, $grid_item_height);
        grid-template-rows: repeat(3, $grid_item_height);
        grid-row-gap: $grid_item_margin;
        grid-column-gap: $grid_item_margin;
        .grid-item {
            display: inline-grid;
            border-radius: $grid_item_radius;
            &:nth-child(1) {
                grid-row-start: 1;
                grid-column-start: 1;
            }
            &:nth-child(2) {
                grid-row-start: 1;
                grid-column-start: 2;
            }
            &:nth-child(3) {
                grid-row-start: 1;
                grid-column-start: 3;
            }
            &:nth-child(4) {
                grid-row-start: 2;
                grid-column-start: 3;
            }
            &:nth-child(5) {
                grid-row-start: 3;
                grid-column-start: 3;
            }
            &:nth-child(6) {
                grid-row-start: 3;
                grid-column-start: 2;
            }
            &:nth-child(7) {
                grid-row-start: 3;
                grid-column-start: 1;
            }
            &:nth-child(8) {
                grid-row-start: 2;
                grid-column-start: 1;
            }
            &:nth-child(9) {
                grid-row-start: 2;
                grid-column-start: 2;
            }
        }
    }
}
</style>
