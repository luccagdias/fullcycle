FROM golang:alpine AS builder

COPY . .
RUN go build main.go && mv ./main /app

FROM scratch

COPY --from=builder /app /app

CMD ["/app"]
