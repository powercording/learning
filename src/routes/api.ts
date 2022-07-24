const URL = `https://api.upbit.com/v1`;
export function getUpbitCoins() {
  return fetch(`${URL}/market/all`).then((response) => response.json());
}

export function getPriceData(coinId: string) {
  return fetch(`${URL}/candles/minutes/1?market=${coinId}&count=1`).then(
    (response) => response.json()
  );
}

export function getMinutesData(coinId: string) {
  return fetch(`${URL}/candles/minutes/1?market=${coinId}&count=30`).then(
    (response) => response.json()
  );
}
