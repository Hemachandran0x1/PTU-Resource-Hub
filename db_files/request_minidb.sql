-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 27, 2023 at 10:33 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `request_minidb`
--

-- --------------------------------------------------------

--
-- Table structure for table `report`
--

CREATE TABLE `report` (
  `id` bigint(20) NOT NULL,
  `contentid` bigint(20) DEFAULT NULL,
  `reportdesc` varchar(255) DEFAULT NULL,
  `semester` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `topic` varchar(255) DEFAULT NULL,
  `unit` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

CREATE TABLE `request` (
  `id` bigint(20) NOT NULL,
  `requestdesc` varchar(255) DEFAULT NULL,
  `userid` bigint(20) DEFAULT NULL,
  `status` int(11) NOT NULL,
  `topic` varchar(255) DEFAULT NULL,
  `subjectid` bigint(20) DEFAULT NULL,
  `unit` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `request`
--

INSERT INTO `request` (`id`, `requestdesc`, `userid`, `status`, `topic`, `subjectid`, `unit`) VALUES
(1, 'Need Materials for SpringBoot', 4, 0, NULL, NULL, NULL),
(5, 'Fsd Old question Papers required', 4, 0, NULL, NULL, NULL),
(6, 'ATCD Question Papers', 4, 0, NULL, NULL, NULL),
(7, 'Video for InterFragment Communication in Mobile application development', 4, 0, NULL, NULL, NULL),
(8, 'SpringBoot Security related materials', 4, 0, NULL, NULL, NULL),
(9, 'MPMC traffic light simulation materials', 3, 0, NULL, NULL, NULL),
(10, 'Semester 5 all old question papers', 3, 0, NULL, NULL, NULL),
(11, 'Book for Advanced Security Concepts', 3, 0, NULL, NULL, NULL),
(12, 'ccccc', 4, 1, NULL, NULL, NULL),
(13, 'vgb', 4, 1, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `request`
--
ALTER TABLE `request`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `report`
--
ALTER TABLE `report`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `request`
--
ALTER TABLE `request`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
