/**
 * 处理浏览器reseize的时候的一些方法
 * @param fn
 */

// eslint-disable-next-line import/prefer-default-export
export function useResize(fn: () => void): void {
	window.addEventListener('resize', (e) => {
		console.log('ee', e);
		fn();
	});
}
