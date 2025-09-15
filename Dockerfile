FROM nginx:alpine

# Remove default Nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Add your config
COPY default.conf /etc/nginx/conf.d/

# Serve everything from public/
COPY public/ /usr/share/nginx/html/
