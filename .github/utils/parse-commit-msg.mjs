import {core} from '@actions'

export default async function ParseCommitMsg({ commitMsgs }) {
	const commits = commitMsgs.split('/n').filter(m => !/^Merge pull request/.test(m))
	.map(m => m.replace(/\n+(.*)/g, '\n> $1'))
	.map(m => `> ${m}`)
	.join('\n')
}