# Deploy — Syllabri

Instrucciones para desplegar en un servidor Linux con Node.js y PM2.

## Requisitos previos

```sh
node -v   # >= 20
npm -v    # >= 10
pm2 -v    # si no está: npm install -g pm2
```

---

## Primera vez

```sh
cd /opt
git clone https://github.com/aduenasdev/syllabri.git
cd syllabri

# Crear variables de entorno (no está en git)
cat > .env.local << 'EOF'
INCOMING_MODE=true
PORT=3010
NEXT_PUBLIC_SITE_URL=https://syllabri.com
EOF

npm install
npm run build
pm2 start "npm run start" --name syllabri
pm2 save
pm2 startup   # copia y ejecuta el comando que te devuelva
```

---

## Actualizar tras un push

```sh
cd /opt/syllabri
git pull origin main
npm install
npm run build
pm2 restart syllabri
```

---

## Activar / desactivar modo incoming

```sh
# Activar
sed -i 's/INCOMING_MODE=false/INCOMING_MODE=true/' .env.local
pm2 restart syllabri

# Desactivar
sed -i 's/INCOMING_MODE=true/INCOMING_MODE=false/' .env.local
pm2 restart syllabri
```

---

## Comandos PM2 útiles

| Acción | Comando |
|--------|---------|
| Ver estado | `pm2 status` |
| Ver logs en vivo | `pm2 logs syllabri` |
| Reiniciar | `pm2 restart syllabri` |
| Detener | `pm2 stop syllabri` |
| Eliminar proceso | `pm2 delete syllabri` |

---

## Verificar que corre

```sh
curl http://localhost:3010
```

---

## Nginx como proxy inverso + SSL

### 1. Crear el archivo de configuración

```sh
nano /etc/nginx/sites-available/syllabri-frontend.conf
```

Contenido:

```nginx
server {
    listen 80;
    server_name syllabri.com www.syllabri.com;

    location / {
        proxy_pass         http://127.0.0.1:3010;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection 'upgrade';
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 2. Activar el sitio

```sh
ln -s /etc/nginx/sites-available/syllabri-frontend.conf /etc/nginx/sites-enabled/
```

### 3. Probar sintaxis

```sh
nginx -t
```

### 4. Recargar Nginx

```sh
systemctl reload nginx
```

### 5. Emitir certificado SSL con Certbot

```sh
certbot --nginx -d syllabri.com -d www.syllabri.com
```

Certbot emite el certificado, inserta el bloque SSL, configura la redirección 80 → 443 y recarga Nginx automáticamente.

### 6. Verificar que el servicio interno corre en 3010

```sh
ss -tulpn | grep 3010
```

### 7. Probar HTTPS

```sh
curl -I https://syllabri.com
```

### Resultado final

`syllabri.com` queda:
- Servido por Nginx
- Redirigido a HTTPS automáticamente
- Con certificado Let's Encrypt activo
- Proxy inverso hacia el frontend en puerto 3010
