# Build the patched Next.js bundle with the dependencies shipped in 0.1.2.
ARG UPSTREAM=ghcr.io/bobodread876/kathreftestr:0.1.2@sha256:5b9551a60e7594fae0f7f1ee74a0cd459f3eef3a6db678e49ac075ec592c08ad
FROM --platform=$BUILDPLATFORM alpine:3.23@sha256:469c9ea410b9215eaee7976ba6c0639039b444be8e5d638f7abbada189971eb2 AS source
RUN apk add --no-cache patch
WORKDIR /src
COPY upstream-project/ ./
COPY patches/ /patches/
RUN for patchfile in /patches/*.patch; do patch -p1 -i "$patchfile" || exit 1; done

FROM --platform=$BUILDPLATFORM ${UPSTREAM} AS build
COPY --from=source /src/ /app/
RUN rm -rf .next && npm run build

FROM ${UPSTREAM}
# The mirror uses Streamlink for Twitch and as its YouTube fallback.
RUN apt-get update && apt-get install -y --no-install-recommends streamlink \
    && rm -rf /var/lib/apt/lists/*
COPY --from=build /app/.next /app/.next
