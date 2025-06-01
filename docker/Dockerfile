# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy dependencies and install
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Expose and run
EXPOSE 3000
CMD ["npm", "run", "dev"]
