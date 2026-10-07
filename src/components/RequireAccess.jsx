import { Navigate } from "react-router-dom";
import { isUnlocked } from "@/data/accessCodes";

export default function RequireAccess({ children }) {
  if (!isUnlocked()) {
    return <Navigate to="/" replace />;
  }
  return children;
}
