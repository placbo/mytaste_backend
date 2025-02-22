# mytaste_backend

## Configuration

add an .env-file with the following

```
#Database configuration
DB_HOST=<your_db_host>
DB_USER=<your_db_user>
DB_PASSWORD=<your_db_password>
DB_DATABASE='mytaste'

#API-Server configuration
SERVER_PORT=8882
BASE_PATH='/mytaste'
IMAGE_FOLDER='/images'

#JWT configuration
APP_ADMIN_ID=<google_oauth_id_for_single_admin>
JWT_SECRET=<your_jwt_secret>
JWT_EXPIRATION='8h'

FRONTEND_URL=http://localhost:3000/mytaste
```
