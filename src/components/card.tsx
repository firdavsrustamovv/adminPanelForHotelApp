import React from "react";

interface CardProps {
  title: string;
}
const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{title}</h3>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "26px",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center" as const,
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "18px",
    color: "#3b82f6",
  },
};

export default Card;
