/*
Develop a simple program to analyze user logs. Each log entry contains a user ID and the time they accessed a service. The task is to calculate the total number of unique users who accessed the service each day.
Input:
    2023-11-01: User1
    2023-11-01: User2
    2023-11-01: User1
    2023-11-02: User2
    2023-11-02: User3
Output:
    2023-11-01: 2
    2023-11-02: 2
*/

function analyzeUserLogs(logs) {
    // write code here
    const uniqueUsersDaily = {}
    
    logs.forEach(users  => {
        const [timeOfAccess, userId] = users.split(" ").slice(0, -1).join(" ").split(":").map(item => item.trim());
        const dayOfAccess = timeOfAccess.split(" ")[0];
        
        //condition to check if users visiting a day is unique
        if (!uniqueUsersDaily[dayOfAccess]){
            uniqueUsersDaily[dayOfAccess] = new Set();
        }
        uniqueUsersDaily[dayOfAccess].add(userId);
    });
    // for loop to have unique users display for the day
    for (const days in uniqueUsersDaily){
        console.log(` ${days}: ${uniqueUsersDaily[days].size}`)
    }
}

// Sample log data
const logs = [
    "2023-11-01 02:34: User1",
    "2023-11-01 11:15: User2",
    "2023-11-01 17:00: User1",
    "2023-11-02 12:34: User2",
    "2023-11-02 15:45: User3",
    "2023-11-03 05:12: User3"
];

analyzeUserLogs(logs);
