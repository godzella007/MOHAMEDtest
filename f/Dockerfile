# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /f

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install


# Copy the source code to the working directory
COPY ./public ./public

COPY ./src ./src

#ENV REACT_APP_baseAPIURL=<backend-app-service-ip>:<port>
# Build the React.js application
RUN npm run build

FROM nginx:latest




# Expose port 8081
EXPOSE 8081

# Start the Node.js application
CMD ["npm", "start"]
