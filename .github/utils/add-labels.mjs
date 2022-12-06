export default function CreateDeployLabels({github, context}) {
	const str = "${{ github.event.comment.body }}";
	const arr = str.split(':')
	const labels = arr[1].split(',');

	if (arr[0] === '/add-labels') {
		github.rest.issues.addLabels({
			issue_number: context.issue.number,
			owner: context.repo.owner,
			repo: context.repo.repo,
			labels: labels
		})
	}
}