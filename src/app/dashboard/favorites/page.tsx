import Favorites from "@/components/dashboard/contacts/Favorites";
import ContactTable from "@/components/dashboard/contacts/Table";
import { MainNav } from "@/components/dashboard/MainNav";
import { SearchNav } from "@/components/dashboard/SearchNav";
import { UserNav } from "@/components/dashboard/UserNav";
import { getCurrentUser } from "@/server/login/actions";
import React from "react";

const FavoriteContactsPage = async () => {
  const currentUser = await getCurrentUser();
  const displayName = currentUser?.user_metadata.display_name || "Unknown";

  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex max-w-7xl mx-auto h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <SearchNav />
            <UserNav
              email={currentUser?.email || "n/a"}
              displayName={displayName}
            />
          </div>
        </div>
      </div>
      <main className="w-full space-y-4 p-8 pt-6 mx-auto">
        <h2>Contactos</h2>
        <hr />
        <Favorites id={currentUser?.id || ""} />
      </main>
    </div>
  );
};

export default FavoriteContactsPage;
