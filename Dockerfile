FROM openjdk:17

LABEL maintainer="f.inaj819@gmail.com"

WORKDIR /app

COPY ${PROJECT_DIR} /app

CMD ["java", "-jar", "./build/libs/grocemate-0.1.war"]

EXPOSE 8081 3001

