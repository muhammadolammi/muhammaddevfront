FROM node:alpine
WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY package.json package-lock.json ./

# Install node packages
RUN npm install

# Copy the rest of the files
COPY . .

# Give run.sh permission
RUN chmod +x run.sh

# Use sh to run the script
CMD ["./run.sh"]
