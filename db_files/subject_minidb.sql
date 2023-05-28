-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 27, 2023 at 10:32 AM
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
-- Database: `subject_minidb`
--

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `id` bigint(20) NOT NULL,
  `deptid` bigint(20) DEFAULT NULL,
  `semid` bigint(20) DEFAULT NULL,
  `subjectcode` varchar(255) DEFAULT NULL,
  `subjectname` varchar(255) DEFAULT NULL,
  `syllabus` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `deptid`, `semid`, `subjectcode`, `subjectname`, `syllabus`) VALUES
(1, 1, 6, 'CSY12', 'Full Stack Development', 'https://drive.google.com/file/d/1UVB12VJg0J871uGjqteF_Otrc7C7eP53/view'),
(2, 1, 6, 'EP201', 'Entrepreneurship', 'https://drive.google.com/file/d/1UVB12VJg0J871uGjqteF_Otrc7C7eP53/view'),
(3, 1, 6, 'CS220', 'Microprocessors and Microcontrollers', 'https://drive.google.com/file/d/1UVB12VJg0J871uGjqteF_Otrc7C7eP53/view'),
(4, 1, 6, 'CS221', 'Web Technologies', 'https://drive.google.com/file/d/1UVB12VJg0J871uGjqteF_Otrc7C7eP53/view'),
(5, 1, 6, 'CS222', 'Information Security', 'https://drive.google.com/file/d/1UVB12VJg0J871uGjqteF_Otrc7C7eP53/view'),
(6, 1, 6, 'CSY03', 'Python Programming', 'https://drive.google.com/file/d/1UVB12VJg0J871uGjqteF_Otrc7C7eP53/view');

-- --------------------------------------------------------

--
-- Table structure for table `topics`
--

CREATE TABLE `topics` (
  `id` bigint(20) NOT NULL,
  `subjectid` bigint(20) DEFAULT NULL,
  `topicname` varchar(255) DEFAULT NULL,
  `unit` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `topics`
--

INSERT INTO `topics` (`id`, `subjectid`, `topicname`, `unit`) VALUES
(1, 1, 'Java Collections', 1),
(2, 1, 'Spring Dependency Injection', 2),
(3, 1, 'Spring Data Jpa', 3),
(4, 1, 'React Functional Components', 4),
(5, 1, 'Dockers', 5),
(6, 1, 'Gradle Fundamentals', 1),
(7, 1, 'Threads', 1),
(8, 1, 'Lambda Expressions', 1),
(9, 1, 'JPA using PostgreSQL', 1),
(10, 1, 'Spring MVC', 2),
(11, 1, 'RESTful Web Service', 2),
(12, 1, 'Introduction to Design Patterns', 2),
(13, 1, 'Spring Controllers', 2),
(14, 1, 'Spring Data REST', 3),
(15, 1, 'Introduction to Microservices', 3),
(16, 1, 'Building a Microservice', 3),
(17, 1, 'Deploying Microservices', 3),
(18, 1, 'React Props and State', 4),
(19, 1, 'React Lifecycle', 4),
(20, 1, 'React Forms and Validation', 4),
(21, 1, 'React Router', 4),
(22, 1, 'Introduction to DevOps', 5),
(23, 1, 'Cloud Computing', 5),
(24, 1, 'Virtualization', 5),
(25, 1, 'Kubernetes', 5),
(26, 2, 'Effectuation ', 1),
(27, 2, 'Entrepreneurial Styles', 1),
(28, 2, 'Design Thinking', 1),
(29, 2, 'Segmenting And Targeting', 1),
(30, 2, 'Value Proposition Canvas', 1),
(31, 2, 'Types of Business Models ', 2),
(32, 2, 'Lean Canvas Model', 2),
(33, 2, 'Solution Demo', 2),
(34, 2, 'MVP', 2),
(35, 2, 'Blue Ocean Stratergy', 2),
(36, 2, 'Revenue Streams', 3),
(37, 2, 'Pricing Stratergy', 3),
(38, 2, 'Financing New Venture', 3),
(39, 2, 'Investor expectation', 3),
(40, 2, 'Pitching to Investors', 3),
(41, 2, 'Product and Brand', 4),
(42, 2, 'Positioning Statement', 4),
(43, 2, 'Digital Presence', 4),
(44, 2, 'Sales Planning', 4),
(45, 2, 'Unique Sales Proposition', 4),
(46, 2, 'Team Building', 5),
(47, 2, 'Types of Leadership', 5),
(48, 2, 'Project Management', 5),
(49, 2, 'Team Management', 5),
(50, 2, 'Business Regulations', 5),
(51, 3, 'Evolution of Microprocessor', 1),
(52, 3, '8085 Architecture', 1),
(53, 3, 'Pin Description', 1),
(54, 3, 'Addressing Modes', 1),
(55, 3, 'Instruction Sets', 1),
(56, 3, '8086 Architecture', 2),
(57, 3, 'Pin Description', 2),
(58, 3, 'Addressing Modes', 2),
(59, 3, 'Instruction Sets', 2),
(60, 3, 'Assembly Directives', 2),
(61, 3, 'Memory Interfacing', 3),
(62, 3, 'I/O Interfacing', 3),
(63, 3, 'Serial and Parallel Communication', 3),
(64, 3, 'D/A and A/D Interface', 3),
(65, 3, 'DMA Controller using 8085', 3),
(66, 3, 'RISC vs CISC', 4),
(67, 3, 'ARM 7 Architecture', 4),
(68, 3, 'Thumb/Arm Instruction', 4),
(69, 3, 'Implementation of GPIO', 4),
(70, 3, 'Timer/Counter', 4),
(71, 3, 'Firmware development using Embedded C', 5),
(72, 3, 'Introduction to Data Types', 5),
(73, 3, 'Conditional Statements', 5),
(74, 3, 'Simple Embedded C Programs', 5),
(75, 3, 'Applications of Microcontrollers', 5),
(76, 4, 'Internet Principles and Components', 1),
(77, 4, 'Internet Protocols', 1),
(78, 4, 'Domain Name Server', 1),
(79, 4, 'Web Browser And Web Server', 1),
(80, 4, 'HTML 5.0', 1),
(81, 4, 'Client Side Programming', 2),
(82, 4, 'JavaScript Basics', 2),
(83, 4, 'JavaScript DOM', 2),
(84, 4, 'Variables And Data Types', 2),
(85, 4, 'Regular Expressions', 2),
(86, 4, 'Introduction to Servlets', 3),
(87, 4, 'Servlet LifeCycle', 3),
(88, 4, 'GET and POST', 3),
(89, 4, 'Session Handling', 3),
(90, 4, 'Database Connectivity', 3),
(91, 4, 'Introduction to PHP', 4),
(92, 4, 'Connection to Database', 4),
(93, 4, 'JSON Basics', 4),
(94, 4, 'MVC Framework', 4),
(95, 4, 'Basic XML Attributes', 4),
(96, 4, 'AJAX Introduction', 5),
(97, 4, 'Database Connection ', 5),
(98, 4, 'Web Services', 5),
(99, 4, 'Components of Web Services', 5),
(100, 4, 'Deploying Web Services', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `topics`
--
ALTER TABLE `topics`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `topics`
--
ALTER TABLE `topics`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
