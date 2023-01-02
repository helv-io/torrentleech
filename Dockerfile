FROM ghcr.io/puppeteer/puppeteer:latest
WORKDIR /usr/src/app
ADD dist/dist.js /usr/src/app/
RUN npm i puppeteer
ENTRYPOINT ["node"]
CMD ["dist.js"]