INSERT INTO Properties 
(UserId, Name, Description, Address, City, State, Zip, Image, Loan, MonthlyMortgage, DesiredRent, RecommendedRent)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
RETURNING *;


