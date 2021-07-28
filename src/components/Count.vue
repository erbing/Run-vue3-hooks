<template>
	<div @click="addCount"> 加： {{ curCount }}</div>
	<div @click="subtCount"> 减： {{ curCount }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCount } from '../hooks/useCount';

export default defineComponent({
	setup() {
		const { addCount, subtCount, curCount } = useCount(1);
		return {
			curCount,
			addCount,
			subtCount,
		};
	},
});
</script>

<style scoped>
.count{
	padding: 10px;
}
</style>
