const importAll = r =>
  r.keys().reduce(
    (accumulator, currentValue) => ({
      ...accumulator,
      [currentValue.replace("./", "")]: r(currentValue)
    }),
    {}
  );

const images = importAll(
  require.context("images/illustrations", false, /\.(png|jpe?g|svg)$/)
);

const useIllustrations = () => images;

export default useIllustrations;
