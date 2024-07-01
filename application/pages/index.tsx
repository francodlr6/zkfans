import {
  Web3Button,
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { greeter } from "../const/contracts";

const Home: NextPage = () => {
  const { contract } = useContract(greeter);

  const { data, isLoading, error } = useContractRead(contract, "greet");

  const { mutateAsync: setGreeting } = useContractWrite(
    contract,
    "setGreeting"
  );

  return (
    <div className="w-full mx-auto pr-8 pl-8 max-w-7xl relative pb-10 mt-32">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
        Hello world
      </h1>

      <p>{isLoading ? "Loading..." : data}</p>

      <Web3Button
        contractAddress={greeter}
        action={() =>
          setGreeting({
            args: ["new value"],
          })
        }
      >
        Click
      </Web3Button>
    </div>
  );
};

export default Home;
