import { useMemo } from 'react';

export const useFormatCurrency = (locale = 'es-ES', currency = 'EUR') => {
  return useMemo(() => {
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    return (amount: number) => formatter.format(amount);
  }, [locale, currency]);
}