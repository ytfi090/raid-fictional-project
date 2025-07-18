// ======================
// Member Data
// ======================
const members = [
  {
    fullName: "Rehan.P",
    joinedDate: "Start of R.A.I.D.",
    rank: "Overwatch",
    id: "001"
  },
  {
    fullName: "Thaahir Ismail",
    joinedDate: "July 16 2025",
    rank: "Iron Vanguard",
    id: "002"
  },
  {
    fullName: "Reyansh Wadhwani",
    joinedDate: "July 17 2025",
    rank: "Field Marshal",
    id: "003"
  },
  {
    fullName: "Talal Haider",
    joinedDate: "July 11 2025",
    rank: "Shieldbearer",
    id: "004"
  },
  {
    fullName: "Karas Amir",
    joinedDate: "July 10 2025",
    rank: "Edge Handler",
    id: "005"
  },
  {
    fullName: "Mahdi Insaf",
    joinedDate: "July 16 2025",
    rank: "Eyes of R.A.I.D. (Intelligence Chief)",
    id: "006"
  },
  {
    fullName: "Zayne Anzil",
    joinedDate: "July 17 2025",
    rank: "Gatekeeper (Recruiter)",
    id: "008"
  }
];

// ======================
// Search Function
// ======================
function searchMember() {
  const input = document.getElementById('searchInput').value.trim().toLowerCase();
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = ""; // Clear previous result

  if (input === "") {
    resultDiv.innerHTML = "<p>Please enter a name, rank, or ID number.</p>";
    return;
  }

  // Find matches
  const matches = members.filter(member => {
    return member.fullName.toLowerCase().includes(input) ||
           member.rank.toLowerCase().includes(input) ||
           member.id.toLowerCase().includes(input);
  });

  if (matches.length > 0) {
    matches.forEach(member => {
      const card = document.createElement('div');
      card.className = 'member-card';
      card.innerHTML = `
        <h3>${member.fullName}</h3>
        <p><strong>Joined Date:</strong> ${member.joinedDate}</p>
        <p><strong>Rank:</strong> ${member.rank}</p>
        <p><strong>ID Number:</strong> ${member.id}</p>
      `;
      resultDiv.appendChild(card);
    });
  } else {
    resultDiv.innerHTML = "<p>No member found with that input.</p>";
  }
}
