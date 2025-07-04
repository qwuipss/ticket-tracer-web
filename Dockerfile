FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 5173

CMD ["sh", "-c", "npm run dev -- --host 0.0.0.0 --base=/ticket-tracer-web/"]