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

ENV REACT_APP_baseAPIURL=192.168.59.105:30005
# Build the React.js application
RUN npm run build






# Expose port 80 of the nginx on default
EXPOSE 8081

# Start the Node.js application
CMD ["npm", "start"]
