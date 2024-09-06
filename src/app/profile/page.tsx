"use client";

import { DepartementForm } from "@/components/Departement/DepartementForm";
import DepartementHeader from "@/components/Departement/DepartementHeader";
import { DepartementTable } from "@/components/Departement/DepartementTable";
import { Card } from "@material-tailwind/react";
import React from "react";

const ProfilePage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-start mx-auto gap-4 ">
      <h1>
        Profile Page
      </h1>
      <p>
        This is the profile page
      </p>
      
    </div>
  );
};

export default ProfilePage;
