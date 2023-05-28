FROM openjdk:17-jdk-slim as build


COPY target/subject-service-0.0.1-SNAPSHOT.jar subject-service-0.0.1-SNAPSHOT.jar

ENTRYPOINT [ "java","-jar","/subject-service-0.0.1-SNAPSHOT.jar" ]