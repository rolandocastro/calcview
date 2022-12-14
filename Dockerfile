#FROM node:16.18.0-alpine AS development
#FROM node:14-alpine AS development
FROM node:14-alpine
#ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependenciessdf
COPY package.json .
#COPY yarn.lock .
RUN yarn install
# Copy app files
COPY . .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "yarn", "start" ]

