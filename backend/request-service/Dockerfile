FROM openjdk:17-jdk-slim as build


COPY target/request-service-0.0.1-SNAPSHOT.jar request-service-0.0.1-SNAPSHOT.jar

ENTRYPOINT [ "java","-jar","/request-service-0.0.1-SNAPSHOT.jar" ]