FROM oven/bun:latest
WORKDIR /bin/Ambrosia
COPY . /bin/Ambrosia
RUN ["bun", "install"]
CMD ["bunx", "pm2", "start", '--name "Ambrosia"', ""]
EXPOSE 3341

