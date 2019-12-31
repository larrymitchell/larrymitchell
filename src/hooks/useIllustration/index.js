import { useState, useEffect, useMemo, useCallback } from "react";
import useIllustrations from "hooks/useIllustrations";

const useIllustration = () => {
  const illustrations = useIllustrations();
  const [currentImageKey, setCurrentImageKey] = useState("");
  const title = useMemo(() => currentImageKey, [currentImageKey]);
  const path = useMemo(() => illustrations[currentImageKey] || "", [
    illustrations,
    currentImageKey
  ]);
  const imageKeys = useMemo(() => Object.keys(illustrations), [illustrations]);
  useEffect(() => {
    setCurrentImageKey(imageKeys[0]);
  }, [imageKeys]);
  const currentImageKeyIndex = useMemo(
    () =>
      imageKeys.findIndex(
        illustrationKey => illustrationKey === currentImageKey
      ),
    [currentImageKey, imageKeys]
  );
  const nextImageKey = useMemo(
    () =>
      imageKeys[
        currentImageKeyIndex === imageKeys.length - 1
          ? 0
          : currentImageKeyIndex + 1
      ],
    [currentImageKeyIndex, imageKeys]
  );
  const previousImageKey = useMemo(
    () =>
      imageKeys[
        currentImageKeyIndex === 0
          ? imageKeys.length - 1
          : currentImageKeyIndex - 1
      ],
    [currentImageKeyIndex, imageKeys]
  );
  const next = useCallback(() => setCurrentImageKey(nextImageKey), [
    nextImageKey
  ]);
  const previous = useCallback(() => setCurrentImageKey(previousImageKey), [
    previousImageKey
  ]);
  return [title, path, next, previous];
};

export default useIllustration;
