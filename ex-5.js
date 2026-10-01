const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  function sumScore(accumulator,student){
    return accumulator+student.score;
  }
  return students.reduce(sumScore,0)/students.length
}

  // Start coding here; // Output: 87.5
console.log(getAverageStudentScore(students));