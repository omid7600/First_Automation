FROM cypress/browsers

RUN mkdir /app

WORKDIR /app

COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress

RUN npm install

ENTRYPOINT ["npx","cypress","run"]

CMD [""]
