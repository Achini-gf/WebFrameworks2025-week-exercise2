import React from "react";
import CourseList from "./CourseList";

export interface CourseType {
  name: string;
  courseId: string;
  studentPositions: number;
}

function App() {
  const courses: CourseType[] = [
    { name: "HTML", courseId: "Y242-444", studentPositions: 30 },
    { name: "JavaScript Basics", courseId: "Y242-445", studentPositions: 35 },
    { name: "JavaScript Advanced", courseId: "Y242-446", studentPositions: 40 },
    { name: "React", courseId: "Y242-447", studentPositions: 25 },
  ];

  return (
    <div>
      <CourseList courses={courses} />
    </div>
  );
}

export default App;
