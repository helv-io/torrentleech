FROM ghcr.io/puppeteer/puppeteer:latest
COPY dist/index.js .
ENTRYPOINT ["node"]
CMD ["index.js"]