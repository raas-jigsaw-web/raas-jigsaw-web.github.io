# Runtime-only: build static assets on the host first, then image this layer.
# Host: cd jigsaw-web && cnpm i && npm run build   (produces dist/)
FROM nginx:1.27-alpine
COPY dist/ /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 8000
