# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app ./app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Set environment variables
ENV PORT=8081
ENV MONGODB_URI="mongodb://127.0.0.1:27017/Project_fin"

# Copy the source code to the working directory
COPY . .

# Expose port 8081
EXPOSE 8081

# Start the Node.js application
CMD ["npm", "start"]
