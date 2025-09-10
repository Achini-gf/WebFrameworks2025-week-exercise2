import React from "react";
import Course from "./Course";

function CourseList({ courses }) {
  return (
    <div>
      {courses.map((course, index) => (
        <Course
          key={index}
          name={course.name}
          courseId={course.courseId}
          studentPositions={course.studentPositions}
        />
      ))}
    </div>
  );
}

export default CourseList;
