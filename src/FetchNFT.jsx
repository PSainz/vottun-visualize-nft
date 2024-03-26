import React, { useState } from "react";
import { Button, Image, Box, Spinner } from "@chakra-ui/react";
import axios from "axios";

export const FetchNFT = () => {
  const [image, setImage] = useState(null);

  const fetchImage = async () => {
    try {
      const response = await axios.get(
        "https://ipfsgw.vottun.tech/ipfs/bafkreib2isfy6du6uv2jt6mha4eqzosqg4xzxrzcz4xqiveryn2mmau4f4"
      );
      setImage(response.config.url);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" pt={10}>
      <Button onClick={fetchImage} colorScheme="teal" size="md" mb={10}>
        VisualizeNFT
      </Button>
      {image ? (
        <Image
          src={image}
          alt="Fetched"
          boxSize="500px"
          objectFit="cover"
          mt={4}
        />
      ) : (
        <Spinner color="teal" size="xxl" pt={12} />
      )}
    </Box>
  );
};
