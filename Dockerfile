FROM ghcr.io/puppeteer/puppeteer:latest
WORKDIR /usr/src/app
ADD dist/index.js /usr/src/app/
ENTRYPOINT ["node"]
CMD ["index.js"]