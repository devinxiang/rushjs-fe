import os

comment_body = os.environ.get('COMMENT_BODY')
temp = comment_body.split(':')
res = {
	'name': temp[0],
	'value': temp[1].split(',')
}

print(f"::set-output name=COMMENT_JSON::{res}")
