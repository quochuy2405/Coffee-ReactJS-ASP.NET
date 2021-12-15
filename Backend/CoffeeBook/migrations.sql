CREATE TABLE IF NOT EXISTS `__EFMigrationsHistory` (
    `MigrationId` varchar(150) NOT NULL,
    `ProductVersion` varchar(32) NOT NULL,
    PRIMARY KEY (`MigrationId`)
);

START TRANSACTION;

CREATE TABLE `Discount` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `Name` varchar(150) NOT NULL,
    `Value` int NOT NULL DEFAULT 0,
    `Quantity` int NOT NULL DEFAULT 0,
    PRIMARY KEY (`Id`)
);

CREATE TABLE `Manager` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `Name` varchar(150) NOT NULL,
    `Age` int NOT NULL,
    `Gender` bit NOT NULL,
    `Email` varchar(100) NOT NULL,
    `Phone` varchar(11) NOT NULL,
    `Address` varchar(500) NOT NULL,
    `City` varchar(100) NOT NULL,
    `Country` varchar(100) NOT NULL,
    `Salary` bigint NOT NULL DEFAULT 0,
    `Status` varchar(100) NULL DEFAULT 'Hoạt động',
    `Bonus` int NOT NULL DEFAULT 0,
    PRIMARY KEY (`Id`)
);

CREATE TABLE `News` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `Title` varchar(255) NOT NULL,
    `Content` text NULL,
    `Thumbnail` varchar(255) NULL,
    PRIMARY KEY (`Id`)
);

CREATE TABLE `ProductType` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `Name` varchar(150) NOT NULL,
    `Description` text NULL,
    PRIMARY KEY (`Id`)
);

CREATE TABLE `Role` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `RoleName` varchar(100) NOT NULL,
    `Description` text NULL,
    PRIMARY KEY (`Id`)
);

CREATE TABLE `Supplier` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `Name` varchar(150) NOT NULL,
    `Description` text NULL,
    `Address` text NOT NULL,
    `City` varchar(100) NOT NULL,
    `Country` varchar(100) NOT NULL,
    `Phone` varchar(100) NOT NULL,
    `Url` varchar(500) NOT NULL,
    PRIMARY KEY (`Id`)
);

CREATE TABLE `User` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `Username` varchar(100) NOT NULL,
    `Password` varchar(100) NOT NULL,
    `Email` varchar(100) NOT NULL,
    `Phone` varchar(11) NOT NULL,
    `Name` varchar(100) NOT NULL,
    `Avata` varchar(255) NULL,
    `Address` text NULL,
    `City` varchar(100) NULL,
    `Country` varchar(100) NULL,
    `Gender` bit NOT NULL,
    PRIMARY KEY (`Id`)
);

CREATE TABLE `Store` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `StoreName` varchar(150) NOT NULL,
    `Decription` text NULL,
    `Address` varchar(500) NOT NULL,
    `Country` varchar(100) NOT NULL,
    `Phone` varchar(11) NOT NULL,
    `ManagerId` int NOT NULL,
    PRIMARY KEY (`Id`),
    CONSTRAINT `FK_Store_Manager_ManagerId` FOREIGN KEY (`ManagerId`) REFERENCES `Manager` (`Id`) ON DELETE CASCADE
);

CREATE TABLE `Account` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `Username` varchar(100) NOT NULL,
    `Password` varchar(100) NOT NULL,
    `RoleId` int NOT NULL,
    PRIMARY KEY (`Id`),
    CONSTRAINT `FK_Account_Role_RoleId` FOREIGN KEY (`RoleId`) REFERENCES `Role` (`Id`) ON DELETE CASCADE
);

CREATE TABLE `Product` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `Name` varchar(150) NOT NULL,
    `Description` text NULL,
    `Price` int NOT NULL DEFAULT 0,
    `CreatedDate` date NOT NULL,
    `Photo` text NULL,
    `Size` int NOT NULL DEFAULT 0,
    `ProductTypeId` int NOT NULL,
    `SupplierId` int NOT NULL,
    PRIMARY KEY (`Id`),
    CONSTRAINT `FK_Product_ProductType_ProductTypeId` FOREIGN KEY (`ProductTypeId`) REFERENCES `ProductType` (`Id`) ON DELETE CASCADE,
    CONSTRAINT `FK_Product_Supplier_SupplierId` FOREIGN KEY (`SupplierId`) REFERENCES `Supplier` (`Id`) ON DELETE CASCADE
);

CREATE TABLE `Bill` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `UserId` int NOT NULL,
    `Validated` int NOT NULL DEFAULT 0,
    `Status` varchar(100) NULL DEFAULT 'Đang chờ thanh toán',
    `TotalPrice` bigint NOT NULL,
    PRIMARY KEY (`Id`),
    CONSTRAINT `FK_Bill_User_UserId` FOREIGN KEY (`UserId`) REFERENCES `User` (`Id`) ON DELETE CASCADE
);

CREATE TABLE `ShoppingCart` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `UserId` int NOT NULL,
    PRIMARY KEY (`Id`),
    CONSTRAINT `FK_ShoppingCart_User_UserId` FOREIGN KEY (`UserId`) REFERENCES `User` (`Id`) ON DELETE CASCADE
);

CREATE TABLE `Employee` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `Name` varchar(150) NOT NULL,
    `Age` int NOT NULL,
    `Gender` bit NOT NULL,
    `Email` varchar(100) NOT NULL,
    `Phone` varchar(11) NOT NULL,
    `Address` varchar(500) NOT NULL,
    `City` varchar(100) NOT NULL,
    `Country` varchar(100) NOT NULL,
    `Salary` bigint NOT NULL DEFAULT 0,
    `Status` varchar(100) NULL DEFAULT 'Hoạt động',
    `StoreId` int NOT NULL,
    PRIMARY KEY (`Id`),
    CONSTRAINT `FK_Employee_Store_StoreId` FOREIGN KEY (`StoreId`) REFERENCES `Store` (`Id`) ON DELETE CASCADE
);

CREATE TABLE `ShoppingCart_Product` (
    `ShoppingCartId` int NOT NULL,
    `ProductId` int NOT NULL,
    PRIMARY KEY (`ShoppingCartId`, `ProductId`),
    CONSTRAINT `FK_ShoppingCart_Product_Product_ProductId` FOREIGN KEY (`ProductId`) REFERENCES `Product` (`Id`) ON DELETE CASCADE,
    CONSTRAINT `FK_ShoppingCart_Product_ShoppingCart_ShoppingCartId` FOREIGN KEY (`ShoppingCartId`) REFERENCES `ShoppingCart` (`Id`) ON DELETE CASCADE
);

CREATE INDEX `IX_Account_RoleId` ON `Account` (`RoleId`);

CREATE UNIQUE INDEX `IX_Account_Username` ON `Account` (`Username`);

CREATE INDEX `IX_Bill_UserId` ON `Bill` (`UserId`);

CREATE UNIQUE INDEX `IX_Employee_Email` ON `Employee` (`Email`);

CREATE UNIQUE INDEX `IX_Employee_Phone` ON `Employee` (`Phone`);

CREATE INDEX `IX_Employee_StoreId` ON `Employee` (`StoreId`);

CREATE UNIQUE INDEX `IX_Manager_Email` ON `Manager` (`Email`);

CREATE UNIQUE INDEX `IX_Manager_Phone` ON `Manager` (`Phone`);

CREATE UNIQUE INDEX `IX_News_Title` ON `News` (`Title`);

CREATE INDEX `IX_Product_ProductTypeId` ON `Product` (`ProductTypeId`);

CREATE INDEX `IX_Product_SupplierId` ON `Product` (`SupplierId`);

CREATE UNIQUE INDEX `IX_ProductType_Name` ON `ProductType` (`Name`);

CREATE UNIQUE INDEX `IX_Role_RoleName` ON `Role` (`RoleName`);

CREATE INDEX `IX_ShoppingCart_UserId` ON `ShoppingCart` (`UserId`);

CREATE INDEX `IX_ShoppingCart_Product_ProductId` ON `ShoppingCart_Product` (`ProductId`);

CREATE UNIQUE INDEX `IX_Store_Address` ON `Store` (`Address`);

CREATE UNIQUE INDEX `IX_Store_ManagerId` ON `Store` (`ManagerId`);

CREATE UNIQUE INDEX `IX_Store_Phone` ON `Store` (`Phone`);

CREATE UNIQUE INDEX `IX_Supplier_Phone` ON `Supplier` (`Phone`);

CREATE UNIQUE INDEX `IX_User_Email` ON `User` (`Email`);

CREATE UNIQUE INDEX `IX_User_Phone` ON `User` (`Phone`);

CREATE UNIQUE INDEX `IX_User_Username` ON `User` (`Username`);

CREATE UNIQUE INDEX `IX_User_Username_Email_Phone` ON `User` (`Username`, `Email`, `Phone`);

INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`)
VALUES ('20211113134247_SetupEntity', '5.0.11');

COMMIT;

