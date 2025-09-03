// ---------- Dummy Data ----------
import FollowUp from '../Models/FollowUp';
import Reciver from '../Models/Reciver';
import User from '../Models/User';

// ---------- Users (10) ----------
export const DUMMY_USERS: User[] = [
  new User(1, 'Alice Johnson', 'alice@example.com', 'pass123'),
  new User(2, 'Bob Smith', 'bob@example.com', 'secret'),
  new User(3, 'Charlie Brown', 'charlie@example.com', 'password'),
  new User(4, 'Diana Prince', 'diana@example.com', 'wonder'),
  new User(5, 'Ethan Hunt', 'ethan@example.com', 'mission'),
  new User(6, 'Fiona Shaw', 'fiona@example.com', 'magic'),
  new User(7, 'George Lucas', 'george@example.com', 'starwars'),
  new User(8, 'Hannah Adams', 'hannah@example.com', 'h@nnah'),
  new User(9, 'Ian McKellen', 'ian@example.com', 'gandalf'),
  new User(10, 'Julia Roberts', 'julia@example.com', 'pretty'),
];

// ---------- Receivers (50) ----------
export const DUMMY_RECIVERS: Reciver[] = [
  // User 1 (Alice)
  new Reciver(1, 'David Lee', 'david@example.com', '#FF6B6B', 1),
  new Reciver(2, 'Eva Green', 'eva@example.com', '#6BCB77', 1),
  new Reciver(3, 'Frank Hall', 'frank@example.com', '#4D96FF', 1),
  new Reciver(4, 'Grace Kelly', 'grace@example.com', '#FFD93D', 1),
  new Reciver(5, 'Henry Ford', 'henry@example.com', '#845EC2', 1),

  // User 2 (Bob)
  new Reciver(6, 'Isla Fisher', 'isla@example.com', '#FF9671', 2),
  new Reciver(7, 'Jack Ryan', 'jack@example.com', '#008F7A', 2),
  new Reciver(8, 'Karen Gillan', 'karen@example.com', '#FFC75F', 2),
  new Reciver(9, 'Liam Neeson', 'liam@example.com', '#FF6F91', 2),
  new Reciver(10, 'Mia Wong', 'mia@example.com', '#6A0572', 2),

  // User 3 (Charlie)
  new Reciver(11, 'Noah Carter', 'noah@example.com', '#FFAA00', 3),
  new Reciver(12, 'Olivia Stone', 'olivia@example.com', '#00C9A7', 3),
  new Reciver(13, 'Paul Walker', 'paul@example.com', '#845EC2', 3),
  new Reciver(14, 'Quinn Baker', 'quinn@example.com', '#FF5E78', 3),
  new Reciver(15, 'Rita Ora', 'rita@example.com', '#4D96FF', 3),

  // User 4 (Diana)
  new Reciver(16, 'Sam Wilson', 'sam@example.com', '#FF9671', 4),
  new Reciver(17, 'Tina Fey', 'tina@example.com', '#845EC2', 4),
  new Reciver(18, 'Uma Thurman', 'uma@example.com', '#FF6B6B', 4),
  new Reciver(19, 'Victor Hugo', 'victor@example.com', '#008F7A', 4),
  new Reciver(20, 'Wendy Adams', 'wendy@example.com', '#FFC75F', 4),

  // User 5 (Ethan)
  new Reciver(21, 'Xander Cage', 'xander@example.com', '#FF6F91', 5),
  new Reciver(22, 'Yara Shahidi', 'yara@example.com', '#6A0572', 5),
  new Reciver(23, 'Zack Morris', 'zack@example.com', '#FFD93D', 5),
  new Reciver(24, 'Amber Rose', 'amber@example.com', '#4D96FF', 5),
  new Reciver(25, 'Brian Cox', 'brian@example.com', '#845EC2', 5),

  // User 6 (Fiona)
  new Reciver(26, 'Cathy Woods', 'cathy@example.com', '#00C9A7', 6),
  new Reciver(27, 'Derek White', 'derek@example.com', '#FF9671', 6),
  new Reciver(28, 'Ella Fitzgerald', 'ella@example.com', '#FF6B6B', 6),
  new Reciver(29, 'Fred Perry', 'fred@example.com', '#008F7A', 6),
  new Reciver(30, 'Gina Torres', 'gina@example.com', '#FFC75F', 6),

  // User 7 (George)
  new Reciver(31, 'Harvey Dent', 'harvey@example.com', '#FFD93D', 7),
  new Reciver(32, 'Ivy Watson', 'ivy@example.com', '#FF6F91', 7),
  new Reciver(33, 'Jason Bourne', 'jason@example.com', '#6A0572', 7),
  new Reciver(34, 'Kelly Clarkson', 'kelly@example.com', '#845EC2', 7),
  new Reciver(35, 'Leo Messi', 'leo@example.com', '#FF9671', 7),

  // User 8 (Hannah)
  new Reciver(36, 'Monica Bellucci', 'monica@example.com', '#FF6B6B', 8),
  new Reciver(37, 'Nina Dobrev', 'nina@example.com', '#008F7A', 8),
  new Reciver(38, 'Oscar Wilde', 'oscar@example.com', '#4D96FF', 8),
  new Reciver(39, 'Pam Beesly', 'pam@example.com', '#FFC75F', 8),
  new Reciver(40, 'Quincy Jones', 'quincy@example.com', '#845EC2', 8),

  // User 9 (Ian)
  new Reciver(41, 'Rachel Green', 'rachel@example.com', '#6A0572', 9),
  new Reciver(42, 'Steve Rogers', 'steve@example.com', '#FF6F91', 9),
  new Reciver(43, 'Tony Stark', 'tony@example.com', '#FFD93D', 9),
  new Reciver(44, 'Ursula Kroeber', 'ursula@example.com', '#00C9A7', 9),
  new Reciver(45, 'Vera Wang', 'vera@example.com', '#845EC2', 9),

  // User 10 (Julia)
  new Reciver(46, 'Will Smith', 'will@example.com', '#FF9671', 10),
  new Reciver(47, 'Xenia Onatopp', 'xenia@example.com', '#FF6B6B', 10),
  new Reciver(48, 'Yolanda Adams', 'yolanda@example.com', '#4D96FF', 10),
  new Reciver(49, 'Zara Ali', 'zara@example.com', '#FFC75F', 10),
  new Reciver(50, 'Aaron Taylor', 'aaron@example.com', '#008F7A', 10),
];

// ---------- FollowUps (50) ----------
export const DUMMY_FOLLOWUPS: FollowUp[] = [
  new FollowUp(
    1,
    'Project Kickoff',
    'Initial meeting with team',
    'Pending',
    new Date('2025-09-01'),
    1, // Alice
    2, // Bob
    true,
    '10:00 AM',
  ),
  new FollowUp(
    2,
    'Design Review',
    'Review UI/UX designs with client',
    'Pending',
    new Date('2025-09-02'),
    2, // Bob
    3, // Charlie
    false,
    '02:30 PM',
  ),
  new FollowUp(
    3,
    'Submit Report',
    'Submit monthly progress report',
    'Missed',
    new Date('2025-09-05'),
    3, // Charlie
    1, // Alice
    true,
    '05:00 PM',
  ),
  new FollowUp(
    4,
    'Client Feedback',
    'Gather feedback from client after demo',
    'Missed',
    new Date('2025-09-06'),
    4, // Diana
    5, // Ethan
    true,
  ),
  new FollowUp(
    5,
    'Backend API Integration',
    'Connect mobile app with backend APIs',
    'Completed',
    new Date('2025-09-07'),
    6, // Fiona
    7, // George
    false,
  ),
  new FollowUp(
    6,
    'Testing Cycle',
    'Perform QA testing on latest build',
    'Completed',
    new Date('2025-09-08'),
    8, // Hannah
    9, // Ian
    true,
  ),
  // ... continue until 50 follow-ups
];
