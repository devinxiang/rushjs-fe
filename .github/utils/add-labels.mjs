export default async function CreateDeployLabels({github, context}) {
	const str = context.payload.comment.body;
	console.log('str', str, context.comment)
	const arr = str.split(':')
	const labels = arr[1].split(',');

	if (arr[0] === '/add-labels') {
		await github.rest.issues.addLabels({
			issue_number: context.issue.number,
			owner: context.repo.owner,
			repo: context.repo.repo,
			labels: labels
		})
	}
}