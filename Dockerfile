FROM node:lts-alpine

ADD . /app/
WORKDIR /app

ENV HOST 0.0.0.0
ENV PORT 3000

EXPOSE 3000

CMD ["npm", "start"]
