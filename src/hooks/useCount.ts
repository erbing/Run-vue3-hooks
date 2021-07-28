import { ref, Ref } from 'vue';

interface useCount {
	curCount: Ref<number>,
	addCount: () => void,
	subtCount: () => void
}

// eslint-disable-next-line import/prefer-default-export
export function useCount(initCount: number): useCount {
	const curCount = ref(initCount);

	const addCount = () => {
		console.log(curCount.value);
		curCount.value += 1;
	};

	const subtCount = () => {
		console.log(curCount.value);
		curCount.value -= 1;
	};
	return {
		curCount,
		addCount,
		subtCount,
	};
}
