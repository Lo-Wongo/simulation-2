CREATE TABLE properties (
  PropertyId SERIAL PRIMARY KEY,
  UserId INT,
  Name TEXT,
  Description TEXT,
  Address TEXT,
  City TEXT,
  State TEXT,
  Zip TEXT,
  Image TEXT,
  Loan DECIMAL,
  MonthlyMortgage DECIMAL,
  DesiredRent DECIMAL,
  RecommendedRent DECIMAL,
  FOREIGN KEY ( UserId ) REFERENCES Users(UserId)
);