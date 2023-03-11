import React, { useEffect } from "react";
import { Container } from "./AudioPlayer.styled";
import useSWR from "swr";

async function fetchSoundCloudPlaylist() {
  try {
    const res = await fetch("https://www.example.com");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return "error";
  }
}

export const AudioPlayer: React.FC = () => {
  const data = useSWR("playlist", fetchSoundCloudPlaylist);

  useEffect(() => console.log(data), []);

  return <Container>AudioPlayer</Container>;
};
