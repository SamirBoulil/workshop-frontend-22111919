import React from "react";

export default ({ inline, name }: { inline: boolean; name: string }) => {
  const [{ counter }, setCount] = React.useState({ counter: 0 });
  const increment = () => {
    console.log("Count lorsque la modification est éfféctivement faite");
    setCount(x => ({ ...x, counter: counter + 1 }));
  };
  console.log(`compteur avant modification: ${counter}`);

  React.useEffect(() => {
    console.log(`compteur après modification: ${counter}`);
  }, [counter]);

  React.useEffect(() => {}, [inline]);

  return inline ? (
    <div>
      Vous avez cliqué sur {name} {counter} fois.
      <button onClick={increment}>Incrémente</button>
    </div>
  ) : (
    <button onClick={increment}>
      Compteur {name}: {counter}
    </button>
  );
};
