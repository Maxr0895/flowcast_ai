import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Landing Page</h1>
      <SignInButton>
        <button>Sign In</button>
      </SignInButton>
    </main>
  );
}
