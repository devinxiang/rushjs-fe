// Output: commits<string> | error
module.exports = async ({ diff_commits, core }) => {
	try {
		const commits = diff_commits
			.split('\n')
			.filter(
				(m) =>
					!/^(Merge pull request|Merge branch|Merge remote-tracking)/.test(m) && !!m
			)
			.map((m) => `- ${m}`)
			.unshift('# All Changes')
			.join('\n');

		core.setOutput('commits', commits)
	} catch (error) {
		core.error(error.message)
	}
}
