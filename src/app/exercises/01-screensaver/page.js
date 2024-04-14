import React from "react";
import Link from "next/link";

function ScreenSaverExercise() {
  return (
    <main>
      <p>choose your favorite color</p>
      <ul>
        <li>
          <Link href={`/exercises/01-screensaver/hotpink`}>hotpink</Link>
        </li>
        <li>
          <Link href={`/exercises/01-screensaver/blue`}>blue</Link>
        </li>
        <li>
          <Link href={`/exercises/01-screensaver/green`}>green</Link>
        </li>
      </ul>
    </main>
  );
}

export default ScreenSaverExercise;
