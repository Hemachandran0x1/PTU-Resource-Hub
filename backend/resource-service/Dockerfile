FROM openjdk:17-jdk-slim as build


COPY target/resource-service-0.0.1-SNAPSHOT.jar resource-service-0.0.1-SNAPSHOT.jar

ENTRYPOINT [ "java","-jar","/resource-service-0.0.1-SNAPSHOT.jar" ]