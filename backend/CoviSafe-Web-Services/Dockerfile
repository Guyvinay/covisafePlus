# FROM maven:3.8.5-openjdk-17 AS build
# COPY . ./
# RUN mvn clean package -DskipTests

# FROM openjdk:17.0.1-jdk-slim
# COPY --from=build /target/CoviSafe-Web-Services-0.0.1-SNAPSHOT.jar CoviSafe.jar
# EXPOSE 8080
# ENTRYPOINT [ "java","-jar","CoviSafe.jar" ]

# Stage 1: Build the Java application with Maven
FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app
COPY . ./
RUN mvn clean package -DskipTests

# Stage 2: Create a lightweight Java runtime image
FROM openjdk:17.0.1-jdk-slim
WORKDIR /app
COPY --from=build /app/target/CoviSafe-Web-Services-0.0.1-SNAPSHOT.jar CoviSafe-Web-Services.jar
EXPOSE 8080
CMD ["java", "-jar", "CoviSafe-Web-Services.jar"]
