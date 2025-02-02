import logo from './logo.svg';
import './App.css';
import '@farcaster/auth-kit/styles.css';
import { AuthKitProvider } from '@farcaster/auth-kit';
import { SignInButton, useProfile} from '@farcaster/auth-kit';

const config = {
  rpcUrl: 'https://mainnet.optimism.io',
  domain: 'example.com',
  siweUri: 'https://example.com/login',
};

function App() {
  return (
    <main style={{ fontFamily: 'Inter, "Inter Placeholder", sans-serif' }}>
      {/* @ts-expect-error ethers version type incompat */}
      <AuthKitProvider config={config}>
        <div style={{ position: "fixed", top: "12px", right: "12px" }}>
          <SignInButton />
        </div>
        <div style={{ paddingTop: "33vh", textAlign: "center" }}>
          
          <Profile />
          
        </div>
      </AuthKitProvider>
    </main>
  );
}

function Profile() {
  const profile = useProfile();
  const {
    isAuthenticated,
    profile: { fid, displayName, custody },
  } = profile;

  return (
    <>
      {isAuthenticated ? (
        <div>
          <p>
            Hello, {displayName}! Your FID is {fid}.
          </p>
          <p>
            Your custody address is: <pre>{custody}</pre>
          </p>
        </div>
      ) : (
        <p>
          Click the "Sign in with Farcaster" button above, then scan the QR code
          to sign in.
        </p>
      )}
    </>
  );
}

export default App;
