
Run from `/docker/kafka-streams-ui`:
```bash
  ./package.sh
  docker build --rm -f docker/kafka-streams-ui/Dockerfile -t kafka-streams-ui:latest docker/kafka-streams-ui
  docker tag kafka-streams-ui:latest evilguy/kafka-streams-ui:0.0.1
  docker tag kafka-streams-ui:latest evilguy/kafka-streams-ui:latest
  docker push evilguy/kafka-streams-ui:0.0.1
  docker push evilguy/kafka-streams-ui:latest
```


Run it locally:
```bash
  docker run --rm -it -p 9098:9098 -e KAFKA_STREAMS_REST_API_URL='http://192.168.0.10:9096' kafka-streams-ui:latest 
```
