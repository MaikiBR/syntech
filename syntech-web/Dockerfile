# Usa una imagen base con Node.js y Python
FROM node:14-slim

# Instala Python
RUN apt-get update && apt-get install -y python3 python3-pip

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias de Node.js
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Instala las dependencias de Python
RUN pip3 install -r api-python/requirements.txt

# Construye la aplicación Next.js
RUN npm run build

# Exponer el puerto en el que la aplicación va a correr
EXPOSE 3000

# Define el comando para correr la aplicación
CMD ["npm", "start"]
