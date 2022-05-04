import React, { useEffect } from "react";

export const DetailCompany: React.FC = () => {
  useEffect(() => {
    console.log("hook");
  }, []);

  return <div>Detail Company</div>;
};
