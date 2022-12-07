// Output: null | error
// params: label<string | Array>
module.exports = async ({ github, core, label}) => {
  try {
    var str = '';
    if (typeof label === 'string') {
      str = label
    } if (Array.isArray(label)) {
      str = label.join('\n');
    } else {
      str = '' + label;
    }

    await github.rest.issues.addLabels({
      issue_number: context.issue.number,
      owner: context.repo.owner,
      repo: context.repo.repo,
      labels: str
    })
	} catch (error) {
		core.error(error.message)
	}
}