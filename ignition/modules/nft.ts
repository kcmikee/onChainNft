import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const NFTOnChainModule = buildModule("NFTOnChainModule", (m) => {
  const save = m.contract("OnChainNFT");

  return { save };
});

export default NFTOnChainModule;

// deployed 0x433f11bC957449ae59CFDFbFbCcc0B209cb927A8
