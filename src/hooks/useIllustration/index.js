import { useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import useIllustrations from "hooks/useIllustrations";

const useIllustration = () => {
  const illustrations = useIllustrations();
  const currentImageKey = useSelector(
    state => state.illustration.currentImageKey
  );
  const dispatch = useDispatch();
  const setCurrentImageKey = useCallback(
    changedImageKey =>
      dispatch({ type: "UPDATE_IMAGE_KEY", data: changedImageKey }),
    [dispatch]
  );
  const title = useMemo(() => currentImageKey, [currentImageKey]);
  const path = useMemo(() => illustrations[currentImageKey] || "", [
    illustrations,
    currentImageKey
  ]);
  const imageKeys = useMemo(() => Object.keys(illustrations), [illustrations]);
  useEffect(() => {
    setCurrentImageKey(imageKeys[0]);
  }, [imageKeys, setCurrentImageKey]);
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
    nextImageKey,
    setCurrentImageKey
  ]);
  const previous = useCallback(() => setCurrentImageKey(previousImageKey), [
    previousImageKey,
    setCurrentImageKey
  ]);
  return [title, path, next, previous];
};

export default useIllustration;
