import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

const courses = [
  { name: "HTML", courseId: "Y242-444", studentPositions: 30 },
  { name: "JavaScript Basics", courseId: "Y242-445", studentPositions: 35 },
  { name: "JavaScript Advanced", courseId: "Y242-446", studentPositions: 40 },
  { name: "React", courseId: "Y242-447", studentPositions: 25 },
];

test("renders the course names in app", () => {
  render(<App />);
  courses.forEach((course) => {
    expect(screen.getByText(course.name)).toBeInTheDocument();
  });
});

test("renders the course IDs in app", () => {
  render(<App />);
  courses.forEach((course) => {
    expect(screen.getByText(course.courseId)).toBeInTheDocument();
  });
});

test("renders the student positions in app", () => {
  render(<App />);
  courses.forEach((course) => {
    expect(
      screen.getByText(`Student Positions: ${course.studentPositions}`)
    ).toBeInTheDocument();
  });
});
