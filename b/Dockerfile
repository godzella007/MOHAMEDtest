# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR app


# Copy the package.json and package-lock.json files to the working directory
COPY package.json .

# Install dependencies
RUN npm install


# Copy the source code to the working directory
COPY . .

# Expose port 5000
EXPOSE 5000

# Start the Node.js application
CMD ["node","server","npm","start"]
