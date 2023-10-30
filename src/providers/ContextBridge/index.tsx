/**
 * This component is needed due to a React Context API limitation
 * as it does not pass contexts through different renderers
 * used by libraries such as @pixi/react
 * More info here: https://github.com/michalochman/react-pixi-fiber/pull/194/files
 */

type ContextBridgeProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  contexts: React.Context<any>[];
  barrierRender: (
    children: React.ReactElement | null,
  ) => React.ReactElement | null;
  children: React.ReactNode;
};

export const ContextBridge = ({
  barrierRender,
  contexts,
  children,
}: ContextBridgeProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const providers = (values: any) => {
    const getValue = (index: number) => values[index];

    return (
      <>
        {contexts.reduce((innerProviders, Context, index) => {
          return (
            <Context.Provider value={getValue(index)}>
              {innerProviders}
            </Context.Provider>
          );
        }, children)}
      </>
    );
  };

  const consumers = contexts.reduceRight(
    (getChildren, Context) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (values: any) => {
        return (
          <Context.Consumer>
            {(value) => getChildren([...values, value])}
          </Context.Consumer>
        );
      };
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (values: any) => {
      return barrierRender(providers(values));
    },
  );

  return consumers([]);
};
