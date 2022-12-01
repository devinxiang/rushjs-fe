import os
import json

comment_body = os.environ.get('COMMENT_BODY')
temp = comment_body.split(':')
res = temp[1].split(',')
res_str = json.dumps(res)

print(f"::set-output name=COMMENT_LABELS::{res}")
