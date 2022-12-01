import os
import json

comment_body = os.environ.get('COMMENT_BODY')
temp = comment_body.split(':')

res = temp[1].split(',')
res_str = ','.join(res)

res_json = {
	'name': temp[0],
	'labels': temp[1]
}
res_json_str = json.dumps(res_json)

print(f"::set-output name=COMMENT_LABELS::{res_str}")
print(f"::set-output name=COMMENT_JSON::{res_json_str}")