import { useEffect, useMemo } from 'react';
import { ButtonsStateProps, PricesProps } from '../types';

export default function Prices({
  prices,
  setButtonsState
}: PricesProps<ButtonsStateProps>) {
  const pricesValue = useMemo(
    () =>
      prices
        .filter(({ price }) => price > 0)
        .map(({ type, price }) => {
          const formattedType =
            type === 'printPrice'
              ? 'Печатное издание: '
              : 'Электронное издание: ';
          return (
            <p key={price}>
              {formattedType}
              <span>{price}$</span>
            </p>
          );
        }),
    [prices]
  );

  useEffect(() => {
    console.log(pricesValue);
    setButtonsState((prev) => ({
      ...prev,
      isPurchaseDisabled: !pricesValue.length
    }));
  }, [setButtonsState, pricesValue]);

  return (
    <>
      {<h3>Цена: {pricesValue.length ? pricesValue : <p>Нет в наличии</p>}</h3>}
    </>
  );
}
