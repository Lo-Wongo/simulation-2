SELECT * FROM properties 
WHERE DesiredRent > $1 
AND UserId = $2;