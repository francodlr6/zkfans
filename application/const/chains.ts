/**
 * Define the blockchains you want to use in your application.
 * - DEVELOPMENT_CHAIN: The blockchain you want to use while on localhost and testing.
 * - PRODUCTION_CHAIN: The blockchain you want to use when you deploy your application.
 * The CHAIN export changes depending on what environment you are in.
 */

import type { Chain } from "@thirdweb-dev/chains";

const CardonaTestnet = {
  name: "Polygon Cardona Testnet",
  title: "Polygon Cardona Testnet",
  chain: "Polygon",
  rpc: [
    "https://2442.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.public.zkevm-test.net",
  ],
  faucets: [],
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  infoURL: "https://polygon.technology/polygon-zkevm",
  shortName: "testnet-zkEVM-mango",
  chainId: 2442,
  networkId: 2442,
  explorers: [
    {
      name: "Polygon Cardona zkEVM explorer",
      url: "https://cardona-zkevm.polygonscan.com",
      standard: "EIP3091",
    },
  ],
  icon: {
    url: "ipfs://QmNmJZkQgx9RcFLS3rvxQTVYcPfyAFPr667keHTUxB9PDv",
    width: 122,
    height: 135,
    format: "png",
  },
  testnet: true,
  slug: "polygon-cardona-testnet",
} as const satisfies Chain;

export const IS_DEV_ENV = process.env.NODE_ENV === "development";

const DEVELOPMENT_CHAIN = CardonaTestnet; // e.g. Mumbai used for local development
const PRODUCTION_CHAIN = CardonaTestnet; // You can use a different chain for production (e.g. Polygon)

export const CHAIN = IS_DEV_ENV ? DEVELOPMENT_CHAIN : PRODUCTION_CHAIN;
