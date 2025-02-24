# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /usr/app

# Copy the package.json and package-lock.json to the working directory
COPY ./ /usr/app

# Install the dependencies
RUN npm install

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]