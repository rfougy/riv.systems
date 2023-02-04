import { aspectRatio } from "../types/aspectRatio";

export function getWidthHeightFromAspectRatio(aspectRatio: aspectRatio): {
  width: number;
  height: number;
} {
  const aspectRatioArr: string[] = aspectRatio.split(":");
  const ratioWidth: number = parseInt(aspectRatioArr[0]);
  const ratioHeight: number = parseInt(aspectRatioArr[1]);

  const width: number = 800;
  const height: number = (width * ratioHeight) / ratioWidth;

  return { width, height };
}
