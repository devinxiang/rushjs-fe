FROM node:16-buster as builder

WORKDIR /opt/deploy

# 怎么指定copy
COPY . .
# COPY --from=builder /opt/monorepo/common/deploy .
# COPY --from=builder /opt/monorepo/apps/meganode-ui/.next apps/meganode-ui/.next

WORKDIR /opt/deploy/apps/meganode-ui

EXPOSE 3000

ENV NODE_ENV production

CMD [ "yarn", "start" ]