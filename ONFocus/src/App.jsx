import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Navbar_s from "./Navbar_s";
import { useState } from "react";
import Hero_s from "./Hero_s";
import { MantineProvider } from "@mantine/core";


function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <MantineProvider>
        <div className="overflow-x-hidden h-screen">
          {user ? (
            <>
              <Navbar_s user={user} setUser={setUser} />
              <Hero_s />
            </>
          ) : (
            <>
              <Navbar setUser={setUser} />
              <Hero setUser={setUser} />
            </>
          )
          }
        </div>
      </MantineProvider>
    </>
  );
}

export default App;