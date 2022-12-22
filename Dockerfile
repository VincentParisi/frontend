FROM alpine:3.14
RUN apk add --update nodejs npm
WORKDIR /build
COPY package.json  package.json 
COPY package-lock.json  package-lock.json 
RUN npm ci

COPY public/ public 
COPY src/ src 
RUN npm run build 



FROM httpd:alpine
WORKDIR /usr/local/apache2/htdocs
COPY --from=build /build/build/ .
RUN chown -R www-data:www-data /usr/local/apache2/htdocs \
    && sed -i "s/Listen 80/Listen \${PORT}/g" /usr/local/apache2/conf/httpd.conf


#https://www.google.com/search?q=jenkins++react.js+docker+image&client=firefox-b-d&sxsrf=ALiCzsYtO4VTwno9NEHVw4asfPQKZhGNHw%3A1669967412213&ei=NK6JY-LFDImH9u8Pk-KzwAQ&ved=0ahUKEwjir5Czudr7AhWJg_0HHRPxDEgQ4dUDCA8&uact=5&oq=jenkins++react.js+docker+image&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAEyBQghEKABOgcIIxCwAxAnOgQIABAeOgYIABAWEB46CAgAEBYQHhAPOggIIRAWEB4QHToHCCEQoAEQCkoECEEYAUoECEYYAFDuFVisM2DRNWgBcAB4AIAB0QGIAe0NkgEGMC4xMy4xmAEAoAEByAEBwAEB&sclient=gws-wiz-serp#fpstate=ive&vld=cid:0bb134bc,vid:Fu-zLPzh7Rc
#https://github.com/dgonzo27/react-docker-gcp/blob/main/Dockerfile
#https://www.youtube.com/watch?v=Fu-zLPzh7Rc
#https://github.com/darinpope/jenkins-example-react/blob/main/Dockerfile
#https://github.com/darinpope/jenkins-example-react

#Change 2 in TEST1
