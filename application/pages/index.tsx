import {
  Web3Button,
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
  useUser,
} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { nft } from "../const/contracts";
import { useState } from "react";

const Home: NextPage = () => {
  const { contract } = useContract(nft);

  const [s, setS] = useState("new value");

  // const { data, isLoading, error } = useContractRead(contract, "mint");

  const { mutateAsync: mint } = useContractWrite(contract, "mint");
  const address = useAddress();

  return (
    <div className="w-full mx-auto pr-8 pl-8 max-w-7xl relative pb-10 mt-32">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
        Hello world
      </h1>

      <input value={s} onChange={(e) => setS(e.target.value)} />

      {/* <p>{isLoading ? "Loading..." : data}</p> */}

      <Web3Button
        contractAddress={nft}
        action={() =>
          mint({
            args: [address],
          })
        }
      >
        Click
      </Web3Button>
    </div>
  );
};

export default Home;
