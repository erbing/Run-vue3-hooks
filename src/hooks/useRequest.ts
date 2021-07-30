type reqeustParams = {
	showSuccMsg: boolean,
	succMsg: string,
	errMsg: string
}

const to = (p:any) => p.then((data:any) => [null, data]).catch((err: any) => [err, null]);

// eslint-disable-next-line max-len
// eslint-disable-next-line import/prefer-default-export
export async function useRequest(promise: Promise<unknown>, pramas:reqeustParams): Promise<any> {
	const { showSuccMsg = true, succMsg, errMsg } = pramas;
	const [err, res] = await to(promise);
	if (err) {
		console.log(errMsg || '操作失败');
		return;
	}
	if (showSuccMsg) {
		console.log(succMsg || '操作成功');
		return res;
	}
}
