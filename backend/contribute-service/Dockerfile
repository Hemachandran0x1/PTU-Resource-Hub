FROM openjdk:17-jdk-slim as build


COPY target/contribute-service-0.0.1-SNAPSHOT.jar contribute-service-0.0.1-SNAPSHOT.jar

ENTRYPOINT [ "java","-jar","/contribute-service-0.0.1-SNAPSHOT.jar" ]