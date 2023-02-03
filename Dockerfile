FROM node:lts as dependencies
WORKDIR /venapp-landing
COPY package.json  ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /venapp-landing
COPY . .
COPY --from=dependencies /venapp-landing/node_modules ./node_modules
RUN yarn build
RUN yarn add sharp

FROM node:lts as runner
WORKDIR /venapp-landing
ENV NODE_ENV production

# COPY --from=builder /my-project/next.config.js ./
COPY --from=builder /venapp-landing/public ./public
COPY --from=builder /venapp-landing/.next ./.next
COPY --from=builder /venapp-landing/node_modules ./node_modules
COPY --from=builder /venapp-landing/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]
