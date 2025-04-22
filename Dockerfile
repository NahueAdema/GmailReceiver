# Imagen base con Node que por defecto lo levanta en un debian
FROM node:18

# Establezco directorio de trabajo
WORKDIR /app

# Copio package.json y package-lock.json 
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copio el resto de la aplicación (incluyendo /src, .env, etc.)
COPY . .

# Exponer el puerto
EXPOSE 3000

# Comando para iniciar la app
CMD ["npm", "start"]

# Ejemplo de uso:
# docker build -t gmail-service .
# docker run -p 3000:3000 gmail-service