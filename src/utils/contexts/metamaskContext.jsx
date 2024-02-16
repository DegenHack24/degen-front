import { createContext, useContext, useState, useEffect } from "react";

const MetaMaskContext = createContext({
  error: null,
  metaMaskAccount: null,
  connectWalletHandler: () => undefined,
  buttonText: "Connect",
});

export const useMetaMaskContext = () => useContext(MetaMaskContext);

// eslint-disable-next-line react/prop-types
export const MetamaskProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [metaMaskAccount, setMetaMaskAccount] = useState(null);
  const [buttonText, setButtonText] = useState("Connect");

  useEffect(() => {
    const accountChangedHandler = (newAccount) => {
      if (typeof newAccount === "string") {
        setMetaMaskAccount(newAccount);
      }
    };

    const chainChangedHandler = () => {
      window.location.reload();
    };

    const disconnectHandler = (newAccount) => {
      if (
        Array.isArray(newAccount) &&
        newAccount.length > 0 &&
        typeof newAccount[0] === "string"
      ) {
        setButtonText("Connected");
        setMetaMaskAccount(newAccount[0]);
      } else {
        setButtonText("Connect");
        setMetaMaskAccount(null);
      }
    };

    if (window.ethereum) {
      window.ethereum.on("accountsChanged", accountChangedHandler);
      window.ethereum.on("chainChanged", chainChangedHandler);
      window.ethereum.on("accountsChanged", disconnectHandler);
    }
  }, []);

  const connectWalletHandler = async () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      try {
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        if (!Array.isArray(account)) {
          throw new Error();
        }

        setMetaMaskAccount(account[0]);
        setButtonText("Connected");
        setError("");
      } catch {
        setError("Cannot connect with Metamask");
      }
    } else {
      setError("Please install MetaMask browser extension to interact");
    }
  };

  return (
    <MetaMaskContext.Provider
      value={{
        error,
        metaMaskAccount,
        buttonText,
        connectWalletHandler,
      }}
    >
      {children}
    </MetaMaskContext.Provider>
  );
};
