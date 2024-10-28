# Use the official PHP image with Apache
FROM php:7.4-apache

# Enable mod_rewrite for Apache
RUN a2enmod rewrite

# Copy your application files into the container's web directory
COPY . /var/www/html/

# Set correct permissions
RUN chown -R www-data:www-data /var/www/html/

# Expose port 80 to allow access to the web server
EXPOSE 80

# Start the Apache server
CMD ["apache2-foreground"]
