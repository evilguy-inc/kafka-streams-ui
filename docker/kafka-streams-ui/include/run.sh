#!/usr/bin/env bash

echo "Kafka streams api url: " $KAFKA_STREAMS_REST_API_URL
cat > /usr/angular-app/src/environments/environment.docker.ts <<EOF

export const environment = {
  production: true,
  kafkaStreamsUrl: '$KAFKA_STREAMS_REST_API_URL'
};

EOF

cd  /usr/angular-app/
ng serve --host 0.0.0.0 --environment docker
