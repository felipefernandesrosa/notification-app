CREATE USER docker with encrypted password 'docker';
CREATE DATABASE notification_app;
GRANT ALL PRIVILEGES ON DATABASE notification_app TO docker;
