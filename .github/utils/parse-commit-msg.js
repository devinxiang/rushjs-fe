// Output: commits<string> | error
module.exports = async ({ diffMsgs, core }) => {
	console.log('diffMsgs-333333', diffMsgs);
	try {
		const commits = diffMsgs.toString().split('\n').filter(
				(m) => !/^(Merge pull request|Merge branch|Merge remote-tracking)/.test(m) && !!m
			)
			.map((m) => `- ${m}`)
			.map((m) => m.replace(/\n+(.*)/g, '\n> $1'))
			.unshift('# All Changes')
			.join('\n');

		core.setOutput('commits', commits)
	} catch (error) {
		core.error(error.message)
	}
}
