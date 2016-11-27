FROM java:8-alpine
MAINTAINER Your Name <you@example.com>

ADD target/uberjar/progl.jar /progl/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/progl/app.jar"]
