<script lang="ts" setup>
defineProps({
    strokeClass: {
        type: String,
        required: true
    }
});
</script>


<template>
    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.78158 14.4998L12.5941 18.3123L20.2191 10.6873M27.2087 14.4998C27.2087 21.5185 21.5189 27.2082 14.5003 27.2082C7.48171 27.2082 1.79199 21.5185 1.79199 14.4998C1.79199 7.48122 7.48171 1.7915 14.5003 1.7915C21.5189 1.7915 27.2087 7.48122 27.2087 14.4998Z"
              stroke="#039855"
              :class="strokeClass"
              stroke-width="2.54167" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>
