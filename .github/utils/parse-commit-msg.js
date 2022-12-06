module.exports = async ({ diffMsgs, core }) => {
	try {
		const commits = diffMsgs.split('/n').filter(m => !/^Merge pull request/.test(m))
			.map(m => m.replace(/\n+(.*)/g, '\n> $1'))
			.map(m => `> ${m}`)
			.join('\n');

		core.setOutput('commits', commits)
	} catch (error) {
		core.error(error.message)
	}

}