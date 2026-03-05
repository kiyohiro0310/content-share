FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# 1. Copy only the package files first
# This ensures that 'npm install' only runs if you change your dependencies
COPY package*.json ./

# 2. Install dependencies (including Nest CLI needed for building)
RUN npm install

# 3. Copy the rest of your server source code
COPY . .

# 4. Now 'npm run build' will find the script in the package.json we just copied
RUN npm run build

EXPOSE 3000

# 5. Start the application
# Note: NestJS usually builds to 'dist/main.js' or 'dist/src/main.js'
# Verify your local 'dist' folder structure to be sure
CMD ["node", "dist/src/main"]