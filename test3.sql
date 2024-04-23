SELECT user.name AS user_name, user.birthdate, customer.name AS customer_name
FROM user
JOIN customer ON user.customer_id = customer.id
WHERE user.status = 1
AND customer.status = 1
AND TIMESTAMPDIFF(YEAR, user.birthdate, CURDATE()) > 18
ORDER BY customer.name;
