FROM php:8.4-cli

RUN apt-get update && apt-get install -y \
    libpq-dev \
    zlib1g-dev \
    zip \
    libzip-dev \
    libicu-dev \
    vim \
    git \
    curl \
    unzip \
    && docker-php-ext-configure zip \
    && docker-php-ext-install zip pdo pdo_pgsql \
    && docker-php-ext-install intl

# Install Xdebug only for development
RUN pecl install xdebug \
    && docker-php-ext-enable xdebug

# Install Composer
COPY --from=composer:2.7 /usr/bin/composer /usr/bin/composer

# PHP config
RUN mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini"
COPY ./common/php/conf.d/ "$PHP_INI_DIR/conf.d/"

# Security & permissions
ENV COMPOSER_ALLOW_SUPERUSER=1
WORKDIR /app
USER nobody
